import Image from "next/image"



const Task2 = () => {
    return (
        <div className="bg-[#0d1738] w-full min-h-screen py-1.50">


            <div className="max-w-7xl mx-auto border border-white/10 p-4 space-y-16">

                <h2 className="text-[#839bc8] w-[70%] text-lg md:text-xl lg:text-2xl font-medium"><span className="text-white">Connect to existing systems.</span> Orchestrate payments across multiple processors, build custom workflows, and connect to third parties using APIs, partner apps or pre-built integrations.</h2>

                <div className="h-120 w-full relative">

                    <div className="absolute pointer-events-none inset-0 h-full w-full bg-transparent opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]" />

                    <div className="relative z-10 w-full h-full">

                        <div className="flex items-center gap-4 w-fit mx-auto bg-[#112054] p-2 rounded-lg">

                            <div className="border border-dotted border-white/10 rounded-lg">
                                <div className="py-1.5 px-4 bg-[#2c2484] rounded-lg">
                                    <p className="text-white text-xs md:text-sm font-medium">ERP</p>
                                </div>
                            </div>

                            <div className="border border-dotted border-white/10 rounded-lg">
                                <div className="py-1.5 px-4 bg-[#2c2484] rounded-lg">
                                    <p className="text-white text-xs md:text-sm font-medium">CRM</p>
                                </div>
                            </div>

                            <div className="border border-dotted border-white/10 rounded-lg">
                                <div className="py-1.5 px-4 bg-[#2c2484] rounded-lg">
                                    <p className="text-white text-xs md:text-sm font-medium">Subscriptions</p>
                                </div>
                            </div>

                            <div className="border border-dotted border-white/10 rounded-lg">
                                <div className="py-1.5 px-4 bg-[#2c2484] rounded-lg">
                                    <p className="text-white text-xs md:text-sm font-medium">Legacy billing</p>
                                </div>
                            </div>

                            <div className="border border-dotted border-white/10 rounded-lg">
                                <div className="py-1.5 px-4 bg-[#2c2484] rounded-lg">
                                    <p className="text-white text-xs md:text-sm font-medium">Booking system</p>
                                </div>
                            </div>

                        </div>

                        {/* <div className="h-44 w-72 border border-white border-dashed border-t-0 roounded-lg absolute top-10 left-1/2 -translate-x-1/2" /> */}

                        <div className="aspect-square left-1/2 absolute -translate-x-1/2 top-40 w-fit flex items-center rounded-lg justify-center p-4 bg-linear-to-r from-[#4032c8] to-[#162760]">
                            <p className="font-bold text-white">stripe</p>
                        </div>

                        <div className="absolute left-[35%] -translate-x-1/2 top-24 py-1.5 px-4 bg-[#533afd] rounded-lg">
                            <p className="text-white text-xs md:text-sm font-medium">SDK</p>
                        </div>

                        <div className="absolute right-[35%] translate-x-1/2 top-24 py-1.5 px-4 bg-[#533afd] rounded-lg">
                            <p className="text-white text-xs md:text-sm font-medium">Event Destinations</p>
                        </div>

                        <div className="absolute left-[35%] -translate-x-1/2 top-48 py-1.5 px-4 bg-[#533afd] rounded-lg">
                            <p className="text-white text-xs md:text-sm font-medium">App Marketplace</p>
                        </div>

                        <div className="absolute right-[32%] translate-x-1/2 top-48 py-1.5 px-4 bg-[#533afd] rounded-lg">
                            <p className="text-white text-xs md:text-sm font-medium">Data Pipeline</p>
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2 top-72 py-1.5 px-4 bg-[#533afd] rounded-lg">
                            <p className="text-white text-xs md:text-sm font-medium">Orchestration</p>
                        </div>

                        <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 top-92">
                            <div className="border border-dotted aspect-square border-white/10 rounded-lg">
                                <div className="p-2 flex items-center justify-center bg-[#2c2484] rounded-lg h-full">
                                    <p className="text-white text-xs md:text-sm font-medium">PSP</p>
                                </div>
                            </div>

                            <div className="border border-dotted aspect-square border-white/10 rounded-lg">
                                <div className="p-2 flex items-center justify-center bg-[#2c2484] rounded-lg h-full">
                                    <p className="text-white text-xs md:text-sm font-medium">PSP</p>
                                </div>
                            </div>

                            <div className="border border-dotted aspect-square border-white/10 rounded-lg">
                                <div className="p-2 flex items-center justify-center bg-[#2c2484] rounded-lg h-full">
                                    <p className="text-white text-xs md:text-sm font-medium">PSP</p>
                                </div>
                            </div>

                            <div className="border border-dotted aspect-square border-white/10 rounded-lg">
                                <div className="p-2 flex items-center justify-center bg-[#2c2484] rounded-lg h-full">
                                    <p className="text-white text-xs md:text-sm font-medium">PSP</p>
                                </div>
                            </div>

                        </div>

                        <div className="grid grid-cols-3 gap-2 absolute left-38 top-38 p-2 rounded-lg">
                            <div className="border border-dotted border-white/10 rounded-lg bg-white p-1">
                                <Image src="/assets/gemini.png" alt="gemini" width={100} height={100} className="size-8" />
                            </div>

                            <div className="border border-dotted border-white/10 rounded-lg bg-white p-1">
                                <Image src="/assets/copilet.png" alt="copilet" width={100} height={100} className="size-8" />
                            </div>

                            <div className="border border-dotted border-white/10 rounded-lg bg-white p-1">
                                <Image src="/assets/github.png" alt="github" width={100} height={100} className="size-8" />
                            </div>

                            <div className="border border-dotted border-white/10 rounded-lg bg-white p-1">
                                <Image src="/assets/slack.png" alt="slack" width={100} height={100} className="size-8" />
                            </div>

                            <div className="border border-dotted border-white/10 rounded-lg bg-white p-1">
                                <Image src="/assets/gpt.png" alt="gpt" width={100} height={100} className="size-8" />
                            </div>

                            <div className="border border-dotted border-white/10 rounded-lg bg-white p-1">
                                <Image src="/assets/azure.png" alt="azure" width={100} height={100} className="size-8" />
                            </div>
                        </div>

                        <div className="border border-dotted aspect-square border-white/10 rounded-lg absolute right-38 top-44">
                            <div className="border border-dotted border-white/10 rounded-lg bg-white p-1">
                                <Image src="/assets/docker.png" alt="docker" width={100} height={100} className="size-8" />
                            </div>
                        </div>


                    </div>

                </div>

            </div>


        </div>
    )
}

export default Task2    