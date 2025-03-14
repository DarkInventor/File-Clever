"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import React, { useState } from "react"
import { CheckCircle } from "lucide-react"

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const name = formData.get("name") as string
    formData.set("subject", `New submission from: ${name}`)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      alert("An error occurred. Please try again later.")
    }
  }

  const ContactForm = () => (
    <form onSubmit={handleSubmit}>
      {/* My Key */}
      {/* <input type="hidden" name="access_key" value="f7f557ec-d591-4fdd-8d76-49d6b514ab6c" /> */} 
      <input type="hidden" name="access_key" value="3a4a2de0-4198-422e-96af-b7b36cc671e0" />
      <input type="hidden" name="subject" value="New Contact Form Submission" />
      <input type="checkbox" name="botcheck" style={{ display: "none" }} />

      <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
        <input
          type="text"
          name="name"
          placeholder="Full name"
         
          className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
        />
      </div>

      <input
        type="text"
        name="phone"
        placeholder="Phone number"
        className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white mb-7.5"
      />

      <div className="mb-11.5 flex">
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          required
          className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
        ></textarea>
      </div>

      <div className="flex flex-wrap gap-4 xl:justify-between ">
        <div className="mb-4 flex md:mb-0">
          <input 
            id="default-checkbox" 
            type="checkbox" 
            className="peer sr-only" 
            required 
            onClick={(e) => e.stopPropagation()} // Prevent label click from checking the checkbox
          />
          <span 
            className="border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded peer-checked:bg-primary"
            onClick={(e) => {
              e.stopPropagation(); // Prevent label click from checking the checkbox
              const checkbox = document.getElementById("default-checkbox") as HTMLInputElement;
              checkbox.checked = !checkbox.checked; // Toggle checkbox state
            }}
          >
            <svg
              className="opacity-0 peer-checked:group-[]:opacity-100"
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                fill="white"
              />
            </svg>
          </span>
          <label 
            htmlFor="default-checkbox" 
            className="flex max-w-[425px] cursor-pointer select-none pl-5"
            onClick={(e) => e.stopPropagation()} // Prevent label click from checking the checkbox
          >
            By clicking Checkbox, you agree to use our "Form" terms And consent cookie usage in browser.
          </label>
        </div>

        <button
          type="submit"
          aria-label="send message"
          className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
        >
          Send Message
          <svg
            className="fill-white"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill=""
            />
          </svg>
        </button>
      </div>
    </form>
  )

  const SuccessMessage = () => (
    <div className="flex flex-col items-center justify-center text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
      <p className="text-lg mb-4">Your details have been received. We will reach out to you soon.</p>
    </div>
  )

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image src="./images/shape/shape-dotted-light.svg" alt="Dotted" className="dark:hidden" fill />
            <Image src="./images/shape/shape-dotted-dark.svg" alt="Dotted" className="hidden dark:block" fill />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                {isSubmitted ? "Message Sent" : "Send a message"}
              </h2>

              {isSubmitted ? <SuccessMessage /> : <ContactForm />}
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">Our Location</h3>
                <p>20 Stonehill Court, Toronto</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">Email Address</h3>
                <p>
                  <a href="mailto:tax@fileclever.com">tax@fileclever.com</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">Phone Number</h4>
                <p>
                <a href="tel:+14373650066">+1 (437)-365-0066</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  )
}

export default Contact

