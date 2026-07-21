

const Button = ({ bgColor = "#f7ecdf", textColor, label = "Book Appointment" }) => {
  return (
    <a
      href="#!"
      style={{ backgroundColor: bgColor, color: textColor }}
      className="group relative w-fit overflow-hidden rounded-[30px] flex items-center gap-2.5 font-secondary py-3 pl-2.5 pr-5"
    >
      <div className="absolute left-2.5 top-1/2 -translate-y-1/2 size-6 bg-white rounded-full scale-100 group-hover:scale-[20] transition-transform duration-500 ease-in-out origin-center" />

      <div className="relative z-10 size-6 flex justify-center items-center rounded-full">
        <img
          src="https://framerusercontent.com/images/O1tnocyvBNm6Zym1OQLf7n6GMk.svg?width=13&height=13"
          alt=""
        />
      </div>

      <span className="relative z-10 text-[14px] font-medium transition-colors duration-200 group-hover:!text-black">
        {label}
      </span>
    </a>
  )
}

export default Button