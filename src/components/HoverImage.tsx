

const HoverImage = () => {

    const characters = [
        {name: "Monkey D Luffy", images: ["/images/luffy.jpeg", "/images/luffy.jpeg", "/images/luffy.jpeg"]},
        {name: "Roronoa Zoro", images: ["/images/zoro.jpeg", "/images/zoro.jpeg", "/images/zoro.jpeg"]},
        {name: "Nami", images: ["/images/nami.jpeg", "/images/nami.jpeg", "/images/nami.jpeg"]},
        {name: "Usopp", images: ["/images/usopp.jpeg", "/images/usopp.jpeg", "/images/usopp.jpeg"]},
        {name: "Sanji", images: ["/images/sanji.png", "/images/sanji.png", "/images/sanji.png"]},
        {name: "Tony Tony Chopper", images: ["/images/tony tony chopper.jpeg", "/images/tony tony chopper.jpeg","/images/tony tony chopper.jpeg"]},
        {name: "Nico Robin", images: ["/images/nico.jpeg", "/images/nico.jpeg", "/images/nico.jpeg"]},
        {name: "Franky", images: ["/images/Franky1.jpeg", "/images/Franky1.jpeg", "/images/Franky1.jpeg"]},
        {name: "Brook", images: ["/images/brook.jpeg", "/images/brook.jpeg", "/images/brook.jpeg"]},
        {name: "Jinbe", images: ["/images/Jinbe.jpeg",  "/images/Jinbe.jpeg",  "/images/Jinbe.jpeg"]},
    ]

    return (
        <>
            <div className="flex "></div>
            <div className="font-mono p-5 m-5 border-b-2">
                <h1>One Piece Anime Hover-effect</h1>
                <p>A Fan Project for personal upskill.</p>
            </div>
            <div className="p-5 font-mono relative">
                <ul>{characters.map((character, index) => (
                    <li key={index} className="relative group flex justify-center p-2 gap-2">
                        <div className="cursor-pointer inline-block text-slate-600 hover:text-3xl hover:text-slate-950 m-2">
                            {character.name}
                        </div>

                        <div className="flex absolute gap-4 justify-center">{character.images.map((img, i) => (
                            <img key={i} src={img} alt={`${character.name} ${i}`} className="hidden group-hover:block w-[20%] h-[20%]" />
                        ))}
                            
                        </div>

                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default HoverImage;