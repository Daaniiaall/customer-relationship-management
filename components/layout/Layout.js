import Link from "next/link"

function Layout({children}) {
  return (
    <>
        <header className="header">
            <h2>Customer Relationship Management (CRM)</h2>
            <Link href="/add-customer">Add Customer</Link>
        </header>

        <div className="main">
            {children}
        </div>
        
        <footer className="footer">
            Developed By <a href="https://github.com/Daaniiaall/" target="_blank" rel="noreferrer">Danial Momenpour</a> with &hearts;
        </footer>
    </>
  )
}

export default Layout