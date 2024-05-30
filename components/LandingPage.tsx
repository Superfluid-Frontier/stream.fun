/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VggePFdtCah
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import TokenForm from "@/components/TokenForm";
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

export default function LandingPage() {
  return <div className="flex flex-col min-h-[100dvh]">
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 border-y">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Deploy your ERC20 token in minutes with our no-code solution
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our intuitive platform allows you to create and deploy your own ERC20 token without any coding
                knowledge. Get started today and take control of your digital assets.
              </p>
              <div className="flex w-full min-w-lg items-center space-x-2 mt-16">
                <TokenForm />
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Create and deploy your token with ease
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our no-code ERC20 token deployer takes care of all the technical details, so you can focus on building
                your project.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <RocketIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Instant Deployment</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Deploy your token in minutes with our streamlined process.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <SettingsIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Customizable Settings</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tailor your token's properties to fit your project's needs.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <LockIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Secure Deployment</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our platform ensures your token is deployed safely and securely.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <WalletIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Wallet Integration</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Easily integrate your token with popular cryptocurrency wallets.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <LayersIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Scalable Infrastructure</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our platform is built to handle high traffic and transaction volumes.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <UsersIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Community Support</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Join our growing community of token creators and get support when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Benefits</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why use our no-code token deployer?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform offers a range of benefits to make your token deployment process seamless and efficient.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <ClockIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Save Time</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our no-code solution allows you to deploy your token in minutes, without the need for extensive
                development.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <BoltIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Increased Efficiency</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our platform streamlines the token deployment process, allowing you to focus on your project's growth.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <ShieldIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Enhanced Security</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our platform ensures your token is deployed securely, with robust security measures in place.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <WalletIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Wallet Compatibility</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Easily integrate your token with popular cryptocurrency wallets, making it accessible to a wider
                audience.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <LayersIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Scalable Infrastructure</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our platform is designed to handle high traffic and transaction volumes, ensuring your token can grow
                with your project.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                  <UsersIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                </div>
                <h3 className="text-lg font-bold">Community Support</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Join our growing community of token creators and get support from our team and other users when you
                need it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">FAQ</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get answers to the most common questions about our no-code ERC20 token deployer.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                What is an ERC20 token?
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  An ERC20 token is a standard for fungible tokens on the Ethereum blockchain. It defines a common set
                  of rules that all ERC20 tokens must adhere to, making them interoperable with each other and with
                  other Ethereum-based applications.
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>
    </main>
  </div>
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function LayersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}


function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}