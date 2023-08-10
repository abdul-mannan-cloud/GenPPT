import React, {useEffect, useState} from "react";
import {animated, useInView, useSpring} from "react-spring";
import axios from 'axios';
import ThemeMenu from "../components/ThemeMenu";

export const Converter = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [numSlides, setNumSlides] = useState(10)
    const [selectedTheme, setSelectedTheme] = useState(0);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    }

    const submitFile = async () => {
        
        if(selectedFile){

            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('numberofslides', numSlides);
            formData.append('theme', selectedTheme);

            try {
            const response = await axios.post('http://localhost:5000/generate_pptx', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
                responseType: 'blob',
            });

            const url = URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'output_presentation.pptx');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // setIsLoading(false);
            // setIsDownloaded(true);
            } catch (error) {
            // toast.warning("Error Generating PPTX");
            // setIsLoading(false);
            }
        }
        else{
            console.log('No File')
        }
    }

    const changeNumSlides = (event) => {
        setNumSlides(event.target.value);
    }

    const [fadeInRef, fadeInView] = useInView({
        triggerOnce: true,
    });

    const fadeIn = useSpring({
        opacity: fadeInView ? 1 : 0,
        from: {opacity: 0},
        config: {duration: 1000},
    })

    useEffect(() => {
        const dropContainer = document.getElementById("dropcontainer")
        const fileInput = document.getElementById("pdfInput")

        dropContainer.addEventListener("dragover", (e) => {
            // prevent default to allow drop
            e.preventDefault()
        }, false)

        dropContainer.addEventListener("dragenter", () => {
            dropContainer.classList.add("drag-active")
        })

        dropContainer.addEventListener("dragleave", () => {
            dropContainer.classList.remove("drag-active")
        })

        dropContainer.addEventListener("drop", (e) => {
            e.preventDefault()
            dropContainer.classList.remove("drag-active")
            fileInput.files = e.dataTransfer.files
            setSelectedFile(e.dataTransfer.files)
        })
    }, [0]);

    return (
        <div className=" wow fadeIn " id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div  className="intro-page">
                <animated.div className="bubble-background">
                    <div className="bubble bubble1"></div>
                    <div className="bubble bubble2"></div>
                    <div className="bubble bubble3"></div>
                    <div className="bubble bubble4"></div>
                    <div className="bubble bubble5"></div>
                    <div className="bubble bubble6"></div>
                    <div className="bubble bubble7"></div>
                    {/* Add more bubble elements */}
                </animated.div>
                <div className="blur-back">

                </div>
                <animated.div ref={fadeInRef} style={fadeIn} className="content">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-12 align-self-center text-center">
                                <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s"
                                     data-wow-delay="1s">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h6>Introducing GENPPT - Powered by ChatGPT</h6>
                                            <h2>Transform PDFs into Engaging PPT Slides</h2>
                                            <p>With just a few clicks, GENPPT utilizes advanced AI technology to convert
                                                your PDFs into compelling PowerPoint slides using the keywords you
                                                provide. Say goodbye to manual slide creation and elevate your
                                                presentations.</p>
                                        </div>
                                        <div className="col-lg-12">

                                        </div>
                                        <div className="col-lg-3">

                                        </div>
                                        <div className="col-lg-6 align-self-center bg-white shadow p-4"
                                             style={{borderRadius: '23px'}}>
                                            <div className="input-group mb-3 justify-content-center">
                                                <label htmlFor="pdfInput" className="drop-container" id="dropcontainer">
                                                    <span className="drop-title">Drop Your Pdf files here</span>
                                                    {/*or*/}
                                                    <input
                                                        style={{display:'none'}}
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="pdfInput"
                                                        accept=".pdf"
                                                        onChange={handleFileChange}
                                                    />
                                                </label>
                                                <div style={{display:'flex', flexDirection:'column'}}>
                                                <span>{`Number of Slides: ${numSlides}`}</span>
                                                <input
                                                type='range'
                                                onChange={changeNumSlides}
                                                min={8}
                                                max={14}
                                                step={1}
                                                defaultValue={10}
                                                value={numSlides}
                                                className='custom-slider'
                                            ></input>
                                            </div>
                                            <ThemeMenu selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme}/>

                                            </div>
                                            <div className="border-first-button ">
                                                <button onClick={submitFile}>Get Started</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>

        </div>
    );
}
