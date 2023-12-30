"use client";
import { Input } from "@/components/ui/input";
import React, { useContext, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  DocumentData,
  setDoc,
  updateDoc,
  serverTimestamp,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase";
import { AuthContext } from "@/app/context/AuthContext";

interface UserData {
  uid: string;
  displayName: string;
  photoURL: string;
  // Add other properties as needed
}

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserData | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const usernameRef = collection(db, "users");
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const q = query(usernameRef, where("displayName", "==", username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0) {
        const userData = querySnapshot.docs[0].data() as UserData;
        setUser(userData);
        setErr(null);
      } else {
        setUser(null);
        setErr("User not found!");
      }
    } catch (err) {
      console.error("An error occurred:", err);
      setErr("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = async () => {
    if (!user) return;

    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      console.error("Error selecting user:", err);
    } finally {
      setUser(null);
      setUsername("");
      setErr("");
    }
   

  };

  return (
    <div>
      <Input
        placeholder="Search a user"
        className="border-0 border-b-2 border-slate-800 bg-transparent"
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKey}
        value={username}
      />
      <div className="text-blue-400 font-extrabold font-mono p-2">
        {loading && <p>Loading...</p>}
      </div>
      {err && <div className="text-red-600 font-mono font-bold">{err}</div>}
      {user && (
        <div
          className="flex gap-2 border-2 rounded-md p-2 cursor-pointer"
          onClick={handleSelect}
        >
          <div>
            <img
              src={user.photoURL}
              alt="User Photo"
              style={{ width: "25px", height: "25px", borderRadius: "50%" }}
            />
          </div>
          <div>
            <p>{user.displayName}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
