const BackToTop = (): JSX.Element => {
  return (
    <a href="#" className="fixed flex items-center justify-center md:bottom-8 bottom-16 right-3 md:left-72 h-12 w-12 bg-black opacity-50 hover:opacity-80 rounded-xl">
      <span className="material-icons transform -rotate-90 text-gray-50 font-semibold text-xl">arrow_forward_ios</span>
    </a>
  )
}

export default BackToTop