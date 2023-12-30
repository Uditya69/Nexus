import React from 'react'
import { Box, Heading, Text } from '@radix-ui/themes';
function page() {
  return (
    <>
    <Box className="p-6">
      <Heading className="text-3xl mb-4">Privacy Policy of Nexus</Heading>

      <Text>
        Nexus is not just another chat app; it's a sanctuary for your conversations, ensuring your privacy is our top priority. Connect with friends seamlessly and securely as you explore the realms of real-time messaging, making every moment count.
      </Text>

      <Heading className="text-2xl mt-6 mb-4">Information We Collect</Heading>

      <Text>
        To provide you with a better experience while using Nexus, we may require you to provide us with certain personally identifiable information. This may include but is not limited to your name, phone number, and email address. The information we collect will be used to contact or identify you.
      </Text>

      <Heading className="text-2xl mt-6 mb-4">Your Privacy Matters</Heading>

      <Text>
        Nexus ensures that your messages are yours and yours alone. While we skip the encryption jargon, rest assured that your conversations are handled with utmost care, respecting your need for privacy.
      </Text>

      <Heading className="text-2xl mt-6 mb-4">Database Provider - Firebase</Heading>

      <Text>
        We utilize Firebase as our service provider for the storage and management of data. Firebase is a secure and reliable platform, and its use is subject to Firebase's own privacy policy. Please refer to Firebase's privacy policy for more information on how they handle your data.
      </Text>

      <Heading className="text-2xl mt-6 mb-4">Log Data</Heading>

      <Text>
        Whenever you use Nexus, we collect information that helps us understand how our service is used. This may include the time and date of your visit, the pages of our service that you visit, and other statistics. However, we do not collect or store your IP address.
      </Text>

      <Heading className="text-2xl mt-6 mb-4">Security</Heading>

      <Text>
        We value your trust in providing us with your personal information and strive to use commercially acceptable means to protect it. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </Text>

      <Heading className="text-2xl mt-6 mb-4">Links to Other Sites</Heading>

      <Text>
        Our service may contain links to other sites. We strongly advise you to review the privacy policies of these websites, as we have no control over and assume no responsibility for their content, privacy policies, or practices.
      </Text>

      <Heading className="text-2xl mt-6 mb-4">Contact Us</Heading>

      <Text>
        If you have any questions or suggestions about our privacy policy, do not hesitate to contact us at [contact@email.com].
      </Text>
    </Box>
  </>
  )
}

export default page