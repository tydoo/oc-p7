const Intro = ({imgBackground, textInIntro, smBig}) => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${imgBackground})`
        }} className={(smBig ? 'h-56':'h-28') + ' w-full md:mt-16 mt-5 md:h-56 md:rounded-3xl rounded-xl overflow-hidden bg-cover flex lg:flex-row flex-col justify-center lg:items-center pl-5 lg:pl-0 text-white font-medium md:text-5xl text-xl'}>
            {textInIntro}
        </div>
    )
}

export default Intro