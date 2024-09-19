import { useState } from "react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"

export const Form = () => {
  const [username, setUsername] = useState("") // Changed from array to string
  const [password, setPassword] = useState("") // Changed from array to string
  const [scraping, setScraping] = useState(false)
  const [error, setError] = useState(null)

  const handleScrape = async () => {
    setScraping(true)
    setError(null)

    try {
      // Send the request to scrape Instagram data
      const response = await axios.post('http://127.0.0.1:5000/instagram', {
        name: username,
        pwd: password,
      })

      if (response.status === 200) {
        // After successful scraping, trigger the file download
        const downloadUrl = await `http://127.0.0.1:5000/instagram/download?username=${username}`

        // Create a hidden link to trigger the file download
        const link = document.createElement('a')
        link.href = downloadUrl
        link.setAttribute('download', `${username}.docx`)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        alert('Scraping successful! File will be downloaded.')
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred during scraping.')
    } finally {
      setScraping(false)
    }
  }

  return (
    <div className="bg-gray-800 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-gray-400 w-80 text-center p-2 h-max px-4">
          <Heading label={"Form"} />
          <SubHeading label={"Enter valid credentials"} />

          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            label={"Username"}
            placeholder={"test123"}
          />
          <InputBox
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
            placeholder={"Enter user password"}
          />

          <div className="pt-4">
            <Button
              onClick={handleScrape}
              label={scraping ? "Scraping..." : "Scrape Instagram"}
              disabled={scraping}
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  )
}
