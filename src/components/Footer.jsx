import logo from '../assets/logo.svg'

function Footer() {
  return (
    <footer className="bg-brand-dark py-10 px-6 border-t border-white/10">
      <div className="max-w-xl mx-auto text-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Clear30"
          className="max-w-[150px] mx-auto mb-6"
        />

        {/* Disclaimer */}
        <p className="text-white/50 text-sm mb-4">
          Individual campus experiences may vary based on implementation, student population, and engagement. Clear30 is not a substitute for professional treatment. Results shared are for informational purposes only.
        </p>

        {/* Copyright */}
        <p className="text-white/50 text-sm">
          © 2026 Clear30. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
