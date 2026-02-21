import { Link } from 'react-router-dom';

const team = [
    {
        name: 'Sarah Jenkins',
        role: 'Senior Architect',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmz4W02_xYhdmgOMnbl1Qi7gSZL3x2VTY2NcgnVX2bJNrgkhCM4k5-HF85hoCiHNbWO85oOIQsOzl3Np4oS9oseEYYN-zLGEzUfyqzm0BQXDhL2KfGR3JEGiGck8YVljY1M2KoUS-awwLKVOdJuESvbBDdaxUcUKvuIOcUjp8aj8QOKPSewbESw8x4zdjYDiMskQ6mQp1N3tPr5BIlGvUR9t4Ot1WaK1POkUv-9nhhhZWgAkcB0HFkRlZYb-dcNJGiceiYX3X4QiyD'
    },
    {
        name: 'Marcus Chen',
        role: 'Interior Lead',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRPfLujQJj_Hc-isF0Aj6DA2j8D__1MEHOsAq-spitTGWGzVynTQQuUelPowPsw3EXXc70p_4ZdxKOrbCFlByT2FqCmn4jopZ_F0c_Ou0C8byZrqK5pIIJOIC0qX-6N_V4xQd1jCVbZ99I_2QC1Pn7i3szLIJlvzxklV1Jid0qUkCMqoxA4zzYAMPdc6mJ579TYfazgoV4lHMqq1fZylVQ6-M5Bv1tJHvL4DVQjUy7-hiEg87ENdrzxbVw902XGCKtDl2PAllqbBZQ'
    },
    {
        name: 'Elena Rodriguez',
        role: 'Landscape Designer',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJmLCqCgUDYAtQI-W6kj4srg8VIxEdzPoaocE2BBSf0ECKhTWc16OSb_CIx8R1uRzt2rY--GunZfYf5N-rX8QUa84pzIJMwwiZ-5CpSbKFo1M3CoYwgOl8sBR9oALtE-d3ltdbCg8grqYtxJkVrCmYx0Pp7sjweKP2QEQ6DNFm7RNZ9iKTXg5-oHrBZn5wf3ddzsOaPejAimHiQGnGJKdwOBGrhe2h-pjL3vmnYQhSGHKtxVrNje98bDXmGnZiZDXXaBwzF4kYMu9-'
    },
    {
        name: 'David Kim',
        role: 'Technical Director',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7MFZ1lFdA0sjIsJtWQCW3zyTeX-Dj49lXnztlTL-6j_6lfm_Odke4-3BHl9sESXFMFpiXNDfZdUjszO4bIGd09qUoHSG4bHe7MAr3VgkM1XF2q1azGw3uFy9XccbLnkAhHSGW0O8aqpw54u2TUCJnN0xj_chmQAbOjTllgCK1mjiAtARV9v5kOrucjAhns0_FXqsIxtDEcnJziJdnihULptCMUhGUZ-_bTfHNyFrDOmAu8qUOW3oC2dzcg-aujSJK1mXW7E5CoZo9'
    },
    {
        name: 'Tom Baker',
        role: 'Lead Engineer',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu2KIage_hzcMXIi0XanxyfGyAIhIjb35vjqNHN9-0QImyz-znESWlKeekEznB3kaiGxw66tkuVxYXIrDhJWTSVncvWat-1uwK6ORPTVDDGmQn2XYIceu6Pqj1f8_oDZ1HJ4dqMwQeF0yF4heT3l-yaeymoCROXDZ2XTNg0bJltKlI8kPSYhKmjlQ3a6HoZA0YzeGOOhGeMiwXj2yBpfC9OiL417JsIu3x3XzNoBPkyxOcpDM-C7GQ16juJgv6OtMm_ed-S8EnYuH9'
    },
    {
        name: 'Aisha Khan',
        role: 'Sustainability Expert',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACisAjY26uHld3v41F1yejyBWvyM-XjcwyMZaDPGZWWeS8cd7K_Ubg4pkqwn_4_kDw1cSI5dRf5JKjMZ-Iw4FWapV--IJVapNuelpJG5E2s4q6C_-t3IQ6KaG294CHrot6jVgF9FlTukYoJBrmEGRBErg3btGupDCRNjQ8mOO8HwcsOQB83uWdPCxfVejd6CCuYHXLyt4HIQdmrwQEtotn3f_GFhfn5xIWi8NFX84zlDXRVSfkAcm4p4j9cjDRBlltahdsUfcSc_UJ'
    },
    {
        name: 'Robert Fox',
        role: 'Project Manager',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlH_U9rQwdLf6y8ndgz-5T-5fzOEYNTFFOq2DYItNfBKqodPsxCpoxo7kVSl1kzA77Yy6sAtBMqmILHsfqQhRj6FgFJEiywNyN_GuPNFsD9aeQMGqtr5sdO52ktjptb_or5hE2gn_FBXvKWzThmL2Kr6_Yl4h5zwkFgvIlp2q4KFirCifelF0YC2z95HEd314bPKxEJQh5Aj85EbkEjhCOqcqIAgkQq5l7mlz2MHAHpIK7i98cOLxQ1_3Lw9lpXb69BXaemLHZjVMa'
    },
    {
        name: 'Lisa Wong',
        role: 'Interior Designer',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzK1sE4t4FUoleF3rEOnFMaWLMWaenP-CXQpwkFlX84EHG4l0VNoB8yOOkMmSMMXrCZ-vId-PGdYt6VEh9W3smTUxoQTcvu453YcWITdHNcSKTHHQ5XvwIwwUeMPeZ4iPE7xfSITZRpCx2QX4pgexOlLkA_xfi_EwQ7NgN89IRBBMkdzNWQf5gqXNO-YCyKXTHtWQonjRfgCYz7e0kVs57wF_zFTw9jhBvh7AxfIA_JLBCc7hjqkKdClMRMVPhYVasGXOz5930D1zi'
    }
];

export default function Studio() {
    return (
        <div className="bg-background-charcoal text-text-white antialiased">
            <header className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background-charcoal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 space-y-8">
                        <div className="space-y-4">
                            <p className="text-primary text-sm font-bold tracking-widest uppercase">Founder &amp; Visionary</p>
                            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white">
                                Architecting <br />
                                <span className="italic text-gray-400">the Future.</span>
                            </h1>
                        </div>
                        <div className="space-y-6 text-lg text-gray-300 max-w-lg leading-relaxed border-l-2 border-white/20 pl-6">
                            <p>
                                "We believe space is not just occupied, but <span className="text-white font-medium">experienced</span>. Our approach merges function with high-end spatial innovation, creating environments that inspire and endure."
                            </p>
                            <p className="text-sm uppercase tracking-wider text-gray-500 font-bold">
                                — James Sterling
                            </p>
                        </div>
                        <div className="pt-4">
                            <a className="inline-flex items-center text-sm font-semibold border-b border-white hover:text-gray-300 transition-colors pb-1 text-white" href="#timeline">
                                View Our History <span className="material-symbols-outlined text-sm ml-2">arrow_downward</span>
                            </a>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 relative group">
                        <div className="absolute -inset-4 bg-surface-dark rounded-lg transform rotate-2 transition-transform group-hover:rotate-1 border border-white/20"></div>
                        <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[3/4] md:aspect-[4/5] border border-white/30">
                            <img alt="Portrait of James Sterling, Founder" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbftjMY_F8tVMSVQc_wfmq-IujXHyIC-d0tdnYlF1hwF4tGV0jllJ6O0C3PkXBkmMdziBlsn_7CwXPrBKaegH_Y1CLdmtmR25CH3aH76cdPE9KF9AQVovJiwJPxz9UQI7ktWUba_cwG3TRcNmJCg8cH9AyBBAUT-R1CMpL49YKItAqDbgww7Q6ZvS7RhAPu2kSLsM7_eTCpZX1R7Zj--bWCVj0gRBmN610C_gGtU7pFcGWsCnuMgNkhIzYWVykeVyP2ob9ouSn8sgx" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-charcoal via-background-charcoal/80 to-transparent text-white">
                                <p className="font-serif text-xl italic">Minimalism isn't absence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-20 bg-background-charcoal border-y border-white/20" id="timeline">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif mb-4 text-white">Studio Timeline</h2>
                        <p className="text-gray-400 max-w-xl mx-auto">A decade of redefining skylines and challenging architectural norms through sustainable innovation.</p>
                    </div>
                    <div className="relative border-l border-white/20 ml-4 md:ml-1/2 space-y-12">
                        <div className="relative pl-8 md:pl-0">
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white ring-4 ring-background-charcoal"></div>
                            <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
                                <div className="md:text-right mb-2 md:mb-0">
                                    <span className="text-sm font-bold text-white tracking-widest">2023</span>
                                    <h3 className="text-xl font-bold mt-1 text-white">Global Expansion</h3>
                                    <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                                        Opened new studios in Tokyo and Berlin, bringing our minimalist ethos to international markets.
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <div className="overflow-hidden rounded shadow-lg h-32 w-full md:w-48 bg-surface-dark border border-white/50">
                                        <img alt="Tokyo Studio" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMsGaTfEgmvjUQmwW1gJ-7ihev4Tav0haRiFpQZAc9gsVUj3gnD3XIwBFTdwt1emWXJa1Rd5-PHbYILsauKbx-g0pYdYFM3bPehj-iT5V27UJ94DshYxZk15EidExGyinFAiWZhgHAxb-1zQKt0NS7tFu3s6dwRvQ_6Ct2-eR_EQ_qvGjDJh4mF1y0ldD88N-tDVfAOgnBUsPcSe0RVmmCRyFi3ANQK9uAJvpwH5A0J7tbqAJqha223CqVG2ONTnGOUlk-FtMbbtpb" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative pl-8 md:pl-0">
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-slate-500 ring-4 ring-background-charcoal"></div>
                            <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
                                <div className="hidden md:block text-right mt-0">
                                    <div className="overflow-hidden rounded shadow-lg h-32 w-full md:w-48 ml-auto bg-surface-dark border border-white/50">
                                        <img alt="Silent House project" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxVX5NYvHC-6kHD2THCi8Hj2XZ9W44JUUqJ0FT_-_z6NZJICC-eHWKwuCKFsvTW-IhAArxJ3_HckGACAE1C7BYI5D8J3fMVjmOkIs897Y9Ix68HcZfuUx6zZX9HUR0Z9AgjqFKCz8WUDSlwR4pjCBb9HdTvOLyXVNHg1dQz3CXKEB_aq-E8T4MDdjw5LFWF_yYqlv_bV_bw7YwiaCT2PQd54jUzzqP8ywuGNYaAlBqgpEGhW3qGNAm22pyryZ2suEtCKATwggrXgKX" />
                                    </div>
                                </div>
                                <div className="mb-2 md:mb-0">
                                    <span className="text-sm font-bold text-gray-500 tracking-widest">2020</span>
                                    <h3 className="text-xl font-bold mt-1 text-white">Pritzker Recognition</h3>
                                    <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                                        Awarded for the "Silent House" project, recognized for exceptional use of negative space.
                                    </p>
                                    <div className="md:hidden mt-4 overflow-hidden rounded shadow-lg h-32 w-full bg-surface-dark border border-white/50">
                                        <img alt="Silent House project" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRg6I39AEH6WCyzojBwcYKvvBztLBwA-fg5p6USQC3-y5j4O4qeQ9VHjI3EtZeQBw5Kn3HRtIHdjfvU8a8EKQmNq16J9MXYOD0hrK7uNy8bIAVW5TJgQLPJhW9taLCyOqESdoOfpSsWwzl_06NwnXu8uQLIZNAO5p3HbPiQs8weAxRIGTdotDqKdMM6hPoCk58sUx9y3se70fG5XOovWYXChHsh7wW-3lcs9QeaFR4LHWhcSqxOdFH4Pbd4EBve1nRlH-KZE3FZX6Q" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative pl-8 md:pl-0">
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-slate-500 ring-4 ring-background-charcoal"></div>
                            <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
                                <div className="md:text-right mb-2 md:mb-0">
                                    <span className="text-sm font-bold text-gray-500 tracking-widest">2018</span>
                                    <h3 className="text-xl font-bold mt-1 text-white">Studio Founded</h3>
                                    <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                                        Established in London with a vision to redefine luxury through reduction and purity.
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <div className="overflow-hidden rounded shadow-lg h-32 w-full md:w-48 bg-surface-dark border border-white/50">
                                        <img alt="First London Office" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrbM7I6f4gzihVHg0qG-iEO5fjILYSEYOaaJUTQsMouE3EbPoLNzB7VfTj62-R2znhMbhXyvJGPeo8SrvO1IaMxBtE0ffbF24LSqqfh4ZRGzu9v4d12RE6ElOXO2_vtWTCxjYM28EA31LnV_XIvqJDsfOl7BiIftL6rtYriDnDgcglEZbueFW02zOoMGzIyWGpDvmWI7QpoM1n0nIsxiurkOS40yqsUW5Nbke0ZBgZ9a3qQCWibMF8MnnoPhcc61OJowFHrf-iuqqx" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-background-charcoal">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">Our People</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white">Meet the Team</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                    {team.map((member) => (
                        <div key={member.name} className="group cursor-pointer">
                            <div className="aspect-[3/4] overflow-hidden rounded mb-4 bg-surface-dark border border-white/30">
                                <img alt={member.name} className="w-full h-full object-cover filter grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" src={member.image} />
                            </div>
                            <h3 className="font-bold text-lg text-white">{member.name}</h3>
                            <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 bg-background-charcoal border-t border-white/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">Environment</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white">Our Space</h2>
                        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                            Designed to facilitate deep work and collaboration. Our studio reflects the charcoal-toned minimalism we bring to every project.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div className="group relative overflow-hidden rounded-lg h-64 md:h-80 border border-white/30">
                            <img alt="Minimalist Meeting Room" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCoRNrKQwkIHHuxMZjaSzMmL8QOBbYrLM_hMq4kMbw_BX78oMgCOkmlJ20xEYQEtFzyP4P2qVVOz4qhz3QHbDHmXSALZP-Erz6e1tFwUb935KMAtkhtfV3xLSBJEbFzyKRz5lYNHObMvnOdZDrI04eSZyWRgQLfKxVQIRBOB9uYkCNLUYm8m0mG8sl3zUXrtgNhz8DmuN8BAOsXooKpu7XpZSbFS6yvlwXN9ndBgvSzSMHucs4ZSC-3YbDqopPnmViDthZhiHc4fTS" />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <span className="uppercase text-xs font-bold tracking-wider">Conference Area</span>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg h-64 md:h-80 border border-white/30">
                            <img alt="Open Plan Workspace" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANfGL0EEwEaJdPIrlBWOZxBvGtJJvPEewMDKZY_ZTAbkmyHeqwAaN2S4TsNY95zh7CXVWp0-K78-1RzJ2lnjQVy60EzK-RN_fTmne8ls0sKFbI_xjn-WzQ1cvojhDT49gMIGjM2VFusOJ5dQrJGGIe3xh1QmFw5EXvdfLGX39iwRw6yDxgH2phu8Qgit2Myd3n2UlZggD7LTSBfp7ylVNfi3l5nSX7b_BMN3_OrX9t6-HtZK6mIIkFOgMLKS5L1EMSMLvLQQWszF1Z" />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <span className="uppercase text-xs font-bold tracking-wider">Main Floor</span>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg h-64 md:h-80 border border-white/30">
                            <img alt="Material Library with minimalist layout table and organized samples" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCetjX-12hp0QholAutuXh4-_9YOYdLQind_qQAlCd5oqPd5qUdkuaIMP8HC-VaQYIbYRmYuxv_m0K_yU7bqGkUsSsRVEG1jO-aY5bU18suu_f8QP9qcHL8KEpZxydp0cawJBpiZTJg_BOg0uvjw4yUyVUq7xcfIDUtGHMce2g8XsnLBp2lV4zIqlxcaE0h-Yh6zhccUQzIGbfJL9gnx-9Y3XFUoouGtuDk_LUwg3d6sprS9nU5UqCXis1OXssKQ8egSrluznkTgJGU" />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <span className="uppercase text-xs font-bold tracking-wider">Material Library</span>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg h-64 md:h-80 border border-white/30">
                            <img alt="Breakout Space" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB1bhYdvdKlpAEBorlJQp-Gb_qAuuQktm78FSDzJ5H1gzjS88hZht9crvD9vb28B8wL5DM_zllX-4Fx2UhjnVFCziYMR8zkYtr8u_7A9smZSlVGEj5zY-0ORlQ8YFzWxOYEv0j-R6pux-KOktuG00l5gGvG17rw6lRtyOfYDqa4LDCHIsQvy-zAZsil5SUJ0ehJkMFab0c4IFOtp2VaZ3-tYzCF9TDL4-FLrSN98tQlxq_PcVSypIGfbRnhDVZsRi3mvFtUBsPVTBP" />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <span className="uppercase text-xs font-bold tracking-wider">Lounge</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background-charcoal text-center border-t border-white/20">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">Ready to build?</h2>
                    <p className="text-lg text-gray-400 mb-10">
                        Let's discuss your vision and bring it to life. We are currently accepting new commissions for 2024.
                    </p>
                    <Link to="/contact" className="bg-white hover:bg-gray-200 text-background-charcoal px-8 py-4 rounded text-lg font-medium transition-all transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto gap-2 max-w-[240px]">
                        <span className="material-symbols-outlined">mail</span>
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
