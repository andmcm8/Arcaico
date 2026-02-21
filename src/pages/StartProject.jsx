import { useState, useRef } from 'react';

export default function StartProject() {
    const [step, setStep] = useState(1);
    const [floors, setFloors] = useState(2);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef(null);

    const nextStep = () => {
        // Validation could go here
        setStep(prev => Math.min(prev + 1, 3));
    };
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(prev => [...prev, ...files]);
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    if (isSubmitted) {
        return (
            <div className="bg-background-dark text-white min-h-screen flex flex-col antialiased">
                <main className="flex-grow flex items-center justify-center pt-20">
                    <div className="max-w-2xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <div className="flex justify-center mb-10">
                            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-25"></div>
                                <span className="material-symbols-outlined text-primary text-5xl relative z-10">architecture</span>
                            </div>
                        </div>
                        <h2 className="text-5xl font-display uppercase tracking-wider text-white mb-8">Inquiry Received</h2>
                        <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
                            Your architectural journey with Arcaico has officially begun. Our partners will review your scope and vision, and we will reach out within 48 hours to schedule an initial discovery session.
                        </p>
                        <div className="h-[1px] w-20 bg-primary/40 mx-auto mb-12"></div>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="inline-flex items-center text-primary text-sm font-bold uppercase tracking-widest hover:text-white transition-colors group"
                        >
                            Return to Homepage
                            <span className="material-symbols-outlined ml-2 text-lg transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="bg-background-dark text-text-white antialiased min-h-screen flex flex-col">
            <main className="flex-grow flex flex-col items-center py-12 px-4 md:px-8 mt-20">
                <div className="max-w-6xl w-full mb-12 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-medium text-sm mb-4 uppercase tracking-widest">
                        <span className="w-8 h-[1px] bg-primary block"></span>
                        {step === 1 && '01 Introduction'}
                        {step === 2 && '02 Scope'}
                        {step === 3 && '03 Timeline'}
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
                        {step === 1 && <>Start your <span className="text-primary italic">Journey</span></>}
                        {step === 2 && <>Scope &amp; <span className="text-primary italic">Ambition</span></>}
                        {step === 3 && <>Project &amp; <span className="text-primary italic">Timeline</span></>}
                    </h1>
                    <p className="text-gray-400 max-w-3xl text-lg mx-auto md:mx-0">
                        {step === 1 && 'Tell us a bit about yourself and the vision for your project.'}
                        {step === 2 && 'Visualizing the scale of your architectural journey.'}
                        {step === 3 && 'Setting expectations for investment and delivery.'}
                    </p>
                </div>

                <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-10">
                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-gray-700 rounded-full mb-8 overflow-hidden">
                            <div className="h-full bg-primary rounded-full transition-all duration-500 ease-in-out" style={{ width: `${(step / 3) * 100}%` }}></div>
                        </div>

                        <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
                            {/* STEP 1: Introduction */}
                            {step === 1 && (
                                <div className="space-y-8 animate-fade-in-up">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="block text-sm font-bold uppercase tracking-wider text-gray-400">First Name</label>
                                            <input required type="text" id="firstName" className="w-full bg-[#252525] border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="block text-sm font-bold uppercase tracking-wider text-gray-400">Last Name</label>
                                            <input required type="text" id="lastName" className="w-full bg-[#252525] border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                                        <input required type="email" id="email" className="w-full bg-[#252525] border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-sm font-bold uppercase tracking-wider text-gray-400">Project Type</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            {['Residential', 'Commercial', 'Cultural'].map(type => (
                                                <label key={type} className="cursor-pointer">
                                                    <input type="radio" name="projectType" value={type} className="peer sr-only" defaultChecked={type === 'Residential'} />
                                                    <div className="px-4 py-3 border border-gray-700 rounded-lg text-center text-gray-300 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all hover:bg-gray-800">
                                                        {type}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="description" className="block text-sm font-bold uppercase tracking-wider text-gray-400">Brief Description</label>
                                        <textarea id="description" rows="4" className="w-full bg-[#252525] border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your core objective..."></textarea>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: Scope & Ambition */}
                            {step === 2 && (
                                <div className="space-y-8 animate-fade-in-up">
                                    <div className="space-y-4">
                                        <label className="block text-sm font-bold uppercase tracking-wider text-gray-300">Number of Floors</label>
                                        <div className="flex items-center gap-4">
                                            <button className="w-12 h-12 rounded-lg bg-[#E8E8E8] text-[#1A1A1A] flex items-center justify-center hover:bg-white transition-colors" onClick={() => setFloors(Math.max(1, floors - 1))} type="button">
                                                <span className="material-symbols-outlined">remove</span>
                                            </button>
                                            <input
                                                className="w-24 bg-[#252525] border border-gray-700 rounded-lg py-3 text-center text-white text-xl focus:ring-2 focus:ring-primary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                readOnly
                                                type="number"
                                                value={floors}
                                            />
                                            <button className="w-12 h-12 rounded-lg bg-[#E8E8E8] text-[#1A1A1A] flex items-center justify-center hover:bg-white transition-colors" onClick={() => setFloors(floors + 1)} type="button">
                                                <span className="material-symbols-outlined">add</span>
                                            </button>
                                            <span className="text-gray-400 text-sm ml-2">Stories above ground</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="block text-sm font-bold uppercase tracking-wider text-gray-300">Key Rooms / Spaces</label>
                                        <div className="flex flex-wrap gap-3">
                                            {['Master Suite', 'Home Office', 'Guest Wing', 'Wine Cellar', 'Open Kitchen', 'Library', 'Gym / Wellness', 'Media Room'].map((room, idx) => (
                                                <label key={room} className="cursor-pointer">
                                                    <input className="sr-only peer" type="checkbox" defaultChecked={idx === 1 || idx === 4} />
                                                    <span className="px-4 py-2.5 rounded-lg border border-gray-700 bg-[#252525] text-gray-300 text-sm font-medium hover:border-gray-500 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all select-none block">{room}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="block text-sm font-bold uppercase tracking-wider text-gray-300">Sustainability Goals</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { title: 'Net Zero Energy', subtitle: 'Produce as much energy as consumed' },
                                                { title: 'Passive House', subtitle: 'Rigorous energy efficiency' },
                                                { title: 'LEED Certification', subtitle: 'Global green building standard' },
                                                { title: 'Sustainable Materials', subtitle: 'Locally sourced or renewable', defaultChecked: true }
                                            ].map(goal => (
                                                <label key={goal.title} className="relative flex items-start space-x-4 p-5 rounded-xl border border-gray-800 bg-[#1e1e1e] hover:border-primary hover:bg-primary/10 has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all duration-300 cursor-pointer group overflow-hidden">
                                                    <div className="relative flex items-center h-6">
                                                        <input
                                                            className="sr-only peer"
                                                            type="checkbox"
                                                            defaultChecked={goal.defaultChecked}
                                                        />
                                                        <div className="w-6 h-6 border-2 border-gray-700 rounded-md bg-[#252525] peer-checked:bg-primary peer-checked:border-primary transition-all duration-300 flex items-center justify-center">
                                                        </div>
                                                        <span className="material-symbols-outlined text-white text-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none select-none">
                                                            check
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">{goal.title}</span>
                                                        <span className="text-gray-500 text-xs mt-1 leading-relaxed">{goal.subtitle}</span>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: Timeline & Budget */}
                            {step === 3 && (
                                <div className="space-y-8 animate-fade-in-up">
                                    <div className="space-y-4">
                                        <label className="block text-sm font-bold uppercase tracking-wider text-gray-300">Estimated Budget Range</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {['$500k - $1M', '$1M - $3M', '$3M - $5M', '$5M+'].map(budget => (
                                                <label key={budget} className="cursor-pointer">
                                                    <input type="radio" name="budget" value={budget} className="peer sr-only" defaultChecked={budget === '$1M - $3M'} />
                                                    <div className="px-4 py-4 border border-gray-700 bg-[#252525] rounded-lg text-center text-gray-300 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all hover:border-gray-500 font-medium">
                                                        {budget}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="block text-sm font-bold uppercase tracking-wider text-gray-300">Expected Start Date</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {['As soon as possible', 'Within 3 months', '3-6 months', 'Gathering information'].map(timing => (
                                                <label key={timing} className="cursor-pointer">
                                                    <input type="radio" name="timing" value={timing} className="peer sr-only" defaultChecked={timing === 'Within 3 months'} />
                                                    <div className="px-4 py-3 border border-gray-700 rounded-lg text-center text-gray-300 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all hover:bg-gray-800 text-sm">
                                                        {timing}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="additionalInfo" className="block text-sm font-bold uppercase tracking-wider text-gray-400">Additional Requirements (Optional)</label>
                                        <textarea id="additionalInfo" rows="3" className="w-full bg-[#252525] border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Any specific requirements regarding timeline, constraints, or unique project features..."></textarea>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="pt-10 mt-10 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                                {step > 1 ? (
                                    <button onClick={prevStep} className="text-gray-400 font-medium hover:text-white transition-colors flex items-center gap-2" type="button">
                                        <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                                    </button>
                                ) : (
                                    <div></div>
                                )}

                                {step < 3 ? (
                                    <button
                                        key={`nav-next-${step}`}
                                        onClick={nextStep}
                                        className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                                        type="button"
                                    >
                                        Continue
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                ) : (
                                    <button
                                        key="nav-submit"
                                        disabled={isSubmitting}
                                        className={`w-full sm:w-auto ${isSubmitting ? 'bg-gray-700 cursor-not-allowed' : 'bg-primary hover:bg-[#ff8585] shadow-primary/20 hover:shadow-primary/40'} text-white px-10 py-4 rounded-lg font-bold shadow-xl hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-2 group relative overflow-hidden`}
                                        type="submit"
                                    >
                                        <span className={`flex items-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                                            Submit Inquiry <span className="material-symbols-outlined text-sm">check</span>
                                        </span>
                                        {isSubmitting && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="lg:col-span-4 relative">
                        {/* Inspiration Board Sidebar */}
                        <div className="lg:sticky lg:top-28 bg-[#252525] p-6 rounded-xl border border-gray-800 shadow-xl mt-12 lg:mt-0">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg text-white uppercase tracking-wide">Inspiration Board</h3>
                                <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Optional</span>
                            </div>

                            <div
                                onClick={handleUploadClick}
                                className="border-2 border-dashed border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer bg-background-dark mb-6"
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    multiple
                                    accept="image/*,.pdf"
                                    onChange={handleFileChange}
                                />
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                                </div>
                                <p className="font-medium text-gray-200 mb-1 group-hover:text-white transition-colors">Click to upload</p>
                                <p className="text-sm text-gray-500 mb-4">or drag and drop images here</p>
                                <p className="text-xs text-gray-600 uppercase tracking-wider">PDF, PNG, JPG (Max 10MB)</p>
                            </div>

                            {selectedFiles.length > 0 && (
                                <div className="mb-6 space-y-2">
                                    <h4 className="text-[10px] font-bold uppercase text-primary tracking-widest mb-3">Selected Artifacts ({selectedFiles.length})</h4>
                                    <div className="max-h-32 overflow-y-auto no-scrollbar space-y-2">
                                        {selectedFiles.map((file, i) => (
                                            <div key={i} className="flex items-center justify-between bg-black/40 p-2 rounded border border-gray-800 animate-in fade-in slide-in-from-left-2 duration-300">
                                                <div className="flex items-center gap-2 truncate">
                                                    <span className="material-symbols-outlined text-gray-600 text-sm">description</span>
                                                    <span className="text-xs text-gray-400 truncate">{file.name}</span>
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedFiles(prev => prev.filter((_, idx) => idx !== i));
                                                    }}
                                                    className="text-gray-600 hover:text-primary transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-xs">close</span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-8 border-t border-gray-800 pt-6">
                                <h4 className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">Quick Select Styles</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Minimalist', 'Industrial', 'Brutalist', 'Scandinavian', 'Modern', 'Biophilic'].map((style, idx) => (
                                        <label key={style} className="cursor-pointer">
                                            <input className="peer sr-only" type="checkbox" defaultChecked={idx === 2 || idx === 0} />
                                            <span className="px-3 py-1.5 rounded-full border border-gray-700 text-xs font-medium text-gray-400 peer-checked:bg-white peer-checked:text-[#1A1A1A] peer-checked:border-white transition-all select-none hover:bg-gray-800 inline-block">
                                                {style}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 bg-background-charcoal p-4 rounded-lg border border-gray-800">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary">info</span>
                                    <div>
                                        <p className="text-sm text-gray-300 font-medium mb-1">Need help deciding?</p>
                                        <p className="text-xs text-gray-500 leading-relaxed">Our design team will collaborate closely with you during the initial discovery phase to refine your vision and select the optimal architectural language.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
