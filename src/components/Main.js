import sonic from "../img/sonicgif.gif";

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
    {props.symbol}
  </span>
)

export default function Main() {
    return(
        <div className="p-2 flex  justify-center items-center h-just95 max-md:flex-col">
            <div className=""><img src={sonic} alt="Sonic" className="rounded-full mr-5 p-2 h-64 max-md:h-32"/></div>
            <div className="flex flex-col justify-center">
                <p className="text-5xl max-sm:text-3xl max-md:pl-8">Hi, I'm Matthias <Emoji symbol="👋" /></p>
                <p className="text-2xl mb-7 max-sm:text-lg max-md:pl-8">I'm a 17 year old developer from Germany</p>
                <div className="flex gap-3 max-md:flex-col max-md:items-center">
                    <a href="mailto:matthias@yasuakii.com" className="py-3 text-xl w-2/5 min-sm:w-3/4 max-md:w-5/6 max-lg:w-2/4  max-md:text-lg max-md:px-7 bg-slate-900 rounded-2xl hover:bg-blue-600 text-center">Contact me</a>
                    <a href="/Matthias_matthias@yasuakii.com-0xA7BA1AD5F3992ECB-pub.asc" className="shadow-2xl px-8 py-3 text-xl w-2/5 min-sm:w-3/4 max-md:w-5/6 max-lg:w-2/4  max-md:text-lg max-md:px-7 bg-slate-900 rounded-2xl hover:bg-blue-600 text-center">PGP Key</a>
               </div>
            </div>
        </div>
    )
}