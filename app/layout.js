import './globals.css'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight:['300', '400', '500', '700'] })

export const metadata = {
  title: 'Kosova Rent',
  description: 'Rent your car today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
