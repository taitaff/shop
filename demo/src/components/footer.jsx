function Footer() {
    return <footer className="page-footer lime accent-3">
        <div className="footer-copyright lime accent-3">
            <div className="container green-text text-darken-4">
                <div>
                    © {new Date().getFullYear()}
                    &nbsp;Copyright
                </div>
            </div>
        </div>
  </footer>
}

export { Footer };