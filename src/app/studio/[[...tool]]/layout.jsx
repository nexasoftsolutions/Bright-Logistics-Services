export const metadata = {
  title: 'Sanity Studio',
  description: 'The backend content management system',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
