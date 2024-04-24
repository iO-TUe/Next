import Header from "../../../react/src/components/header"
import "../../../react/src/index.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <Header />
          <main className="App-main">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
