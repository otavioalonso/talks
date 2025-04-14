
import Deck from '../components/Deck.jsx'
import { Slide, ColumnSlide } from '../components/Slide.jsx'

export default () => (
    <Deck>
        <Slide className='center' iFrameSrc='html/galaxies.html'>
            {/* <img src="image/logo.png" height={200} alt=""/> */}
            <h2>Dark Energy Spectroscopic Instrument</h2>
            <p><i>Surveying Dark Energy with 5000 Robots</i></p>
            <br/>
            <p>Otávio Alves</p>
            <img src="image/desi-logo.png" alt="" height='150px' style={{
                position: 'absolute',
                top: 400,
                left:450,
            }}/>
            <img src="image/doe-logo.png" alt="" height='150px' style={{
                position: 'absolute',
                top: 400,
                left:670,
            }}/>
            <img src="image/um-logo.png" alt="" height='150px' style={{
                position: 'absolute',
                top: 400,
                left:200,
            }}/>
        </Slide>
        <Slide className='center' iFrameSrc='html/expansion.html'>
            <p className="fragment">The Universe is expanding</p>
            <p className="fragment">what does that mean?</p>
        </Slide>
        <Slide>
            <p>&nbsp;</p>
            <img src="image/flat-space.svg" alt=""/>
            <p>Space was flat and boring</p>
        </Slide>
        <Slide>
            <p>Einstein 1915</p>
            <img src="image/curved-space.svg" alt=""/>
            <p>Space-time can curve and bend</p>
        </Slide>
        {/* <Slide>Einstein wrong/right</Slide>
        <Slide color='#ffd' className='center has-light-background'>
            <img src="image/xkcd-einstein.png" height='400px' alt=""/>
            <div className="footer">Source: xkcd.com/1203</div>
        </Slide> */}
        <ColumnSlide color='#ffd'>
            <h2>Space-time in mathematical language</h2>
            <div className="column" style={{overflow: 'hidden'}}>
                <p>A set of points</p>
                <img src="image/points.svg" height='250px' alt=""/>
            </div>
            <div className="column">
            <p>and a way to calculate distances between them (the <b>metric</b>)</p>
            $${'\\text{distance}^2 = \\Delta x^2 + \\Delta y^2 + \\Delta z^2'}$$
            </div>
            
        </ColumnSlide>
        <Slide color='#ffd'>
            <p>The metric that describes our Universe</p>
            <h2>Flat Friedmann–Lemaître–Robertson–Walker</h2>
            $${'\\text{interval}^2 =  a^2(t)\\left[\\Delta x^2 + \\Delta y^2 + \\Delta z^2\\right] - c^2\\Delta t^2'}$$
            
            <div className="fragment fade-out" style={{overflow: 'visible'}}>
                <img src="image/points.svg" height='250px' alt="" style={{
                    animation: 'scaleUpAnimation 20s ease-in-out infinite',
                    marginTop: 80,
                }}/>
            </div>
            <div className="fragment" style={{position: 'relative',top: -380}}>
                <img src="image/scale-factor.svg" height={400} alt=""/>
            </div>
        </Slide>
        {/* <Slide videoSrc='video/bread-cropped.mp4'/> */}
        <Slide color='#ffd'className='center'>
            <p>The expansion of the Universe is accelerating!</p>
            <img src="image/riess.png" alt=""/>
            <img src="image/scp.png" alt=""/>
        </Slide>
        <Slide color='#ffd'>
            <p>What is driving this acceleration?</p>
            <h2>Dark Energy</h2>
        <img src="image/scale-factor-no-de.svg" height={300} alt=""/>
        <img src="image/scale-factor-de.svg" height={300} alt=""/>
        </Slide>
        {/* <Slide color="black">
            <p>The speed of light is finite.</p>
            <p>The further away you look, the further back in time you see.</p>
            <img src="https://pablocarlosbudassi.com/wp-content/uploads/2021/02/1b.png" height="500px" alt=""/>
            <div className="footer">Image: Pablo Budassi</div>
        </Slide> */}
        <Slide className='center' color='#110C31'>
            <p>How can a 3D galaxy map help characterize the expansion history and shed light on the nature of Dark Energy?</p>
        </Slide>
        <Slide className='center' color='#110C31' iFrameSrc='html/expansion-inverse.html'>
            <p>The speed of light is finite.</p>
            <img src="image/me.png" height="400px" alt=""/>
            <p>The further away you look, the further back in time you see.</p>
        </Slide>
        <Slide className='center' color='#110C31'>
            <p>Measure separations between <b style={{color: '#eb5cff'}}>galaxies far away</b></p>
            <img src="image/galaxy-distances.svg" height="400px" alt=""/>
            <p>Compare to separations between <b style={{color:'#ffb300'}}>nearby galaxies</b></p>
        </Slide>
        <Slide imageSrc='image/legacy2.jpg' className=''>
        <h2>The legacy survey</h2>
        <p className='fragment'>But how do we measure distances?</p>
        </Slide>
        <Slide>
            <img src="image/xkcd-distance.png" height='650px' alt=""/>
            <div className="footer">Source: xkcd.com/3066</div>
        </Slide>
        <Slide videoSrc='video/redshift.mp4'>
            <p>Redshift</p>
            <div className="footer">Animation: NASA/JPL-Caltech//R. Hurt (Caltech-IPAC)</div>
        </Slide>
        <Slide className='center' color='#2E303C'>
            <img src="image/redshift_galaxyspectra.png" height='600' alt=""/>
        </Slide>
        {/* <Slide>Doppler vs cosmological redshift</Slide> */}
        <Slide color='black'>
            <img src="image/spectra.png" height='650px' alt=""/>
            <div className="footer">Figure: Shadab Alam</div>
        </Slide>
        
        <Slide videoSrc='video/mayall.mp4' footer='Image: KPNO/NOIRLab/NSF/AURA/P. Marenfeld' color='white'>
        <div className="fragment"><h2 style={{
            color: 'white',
            textShadow: '0px 0px 2px black, 0px 0px 4px black',
        }}>Dark Energy Spectroscopic Instrument</h2></div>
        <div className='fragment' style={{
            textAlign: 'left',
            color: 'white',
            textShadow: '0px 0px 2px black, 0px 0px 4px black',
        }}>
            
            <ul style={{
                // listStyleType: 'none',
                position: 'relative',
                left: '-80px',
            }}>
                <li>Tohono O'Odham Nation</li>
                <li>Kitt Peak, Arizona</li>
                <li>Mayall Telescope</li>
                <li>50M spectra</li>
            </ul>
            </div>
        </Slide>
        <Slide imageSrc='image/galaxies2.png' className=''/>
        <Slide imageSrc='image/galaxies2-targets.png' className=''/>
        <Slide videoSrc='video/instrument.mp4' footer='Image: LBNL/KPNO/NOIRLab/NSF/AURA' loop={false}/>
        <Slide videoSrc='video/positioners.mp4' footer='Image: Claire Poppett/DESI' className='center'>
            <div className='fragment' style={{backgroundColor: 'white', padding: '50px'}}>
                <img src="image/positioner-scheme.png" alt=""/>
            </div>
        </Slide>
        <Slide imageSrc='image/galaxies.jpg' className=''>
            <img src="image/legacy-qr-code.svg" style={{position:'absolute', top: '100px', left: '100px'}} height={200} alt=""/>
        </Slide>
        <Slide imageSrc='image/galaxies-positioners.jpg' className=''>
            <img src="image/legacy-qr-code.svg" style={{position:'absolute', top: '100px', left: '100px'}} height={200} alt=""/>
        </Slide>
        <Slide imageSrc='image/galaxies-positioners-targets.jpg' className=''>
            <img src="image/legacy-qr-code.svg" style={{position:'absolute', top: '100px', left: '100px'}} height={200} alt=""/>
        </Slide>
        <Slide footer='Videos: Apache Point Observatory (SDSS) &amp; Claire Poppett (DESI)'>
            <div className="columns">
                <div className="column" style={{width:"50%", height: "100%", position: "relative"}}>
                    <video data-autoplay loop src="video/sloan.mp4" style={{width: "100%", height: "650px", objectFit: "cover"}}/>
                    <div className="shadow caption"><p><strong>SDSS</strong></p></div>
                </div>
                <div className="column" style={{width:"50%", height: "100%", position: "relative"}}>
                    <video data-autoplay loop src="video/positioners.mp4" style={{width: "100%", height: "650px", objectFit: "cover"}}/>
                    <div className="shadow caption"><p><strong>DESI</strong></p></div>
                </div>
            </div>
        </Slide>
        <Slide videoSrc='video/build-positioners.mp4' footer={<b>Image: Marilyn Chung/LNBL</b>}className='has-light-background'/>
        <Slide iFrameSrc='html/galaxies.html' className='center'>
        </Slide>
        <Slide>
            <p><b>What did DESI find?</b></p>
            <div className='fragment'>
                <p style={{color:'#9f9'}}>hints of</p>
                <h2 style={{color:'#9f9',marginTop: '-30px'}}>Dynamical Dark Energy</h2>
            </div>
            <div className="fragment">
                <p>Dark Energy was thought to have <b style={{color:'#fd7'}}>constant density</b></p>
                <div style={{padding: '0 200px'}}>
                    <img src="image/cube.svg" height='150px' alt="" style={{
                        float: 'left',
                        marginTop: '90px'

                    }}/>
                    <img src="image/cube.svg" height='300px' alt="" style={{
                        float: 'right',
                    }}/>
                </div>
            </div>
            <p></p>
        </Slide>
        <Slide>
            $${'\\rho = \\frac{\\rho_0}{a^{3(1+w)}}'}$$
            <div className="fragment">
                <p>DESI data suggests w is <b style={{color:'#fd7'}}>changing</b></p>
                <img src="image/w0wa.svg" height='400px' style={{marginTop:'30px'}} alt=""/>
            </div>
        </Slide>
        <Slide className='center'>
            <p>Will this evidence be confirmed with more data?</p>
        </Slide>
        <Slide className='center' iFrameSrc='https://fly.otavioalves.com'>
            <img src="image/qr.svg" height={300} alt=""/>
            <p style={{position:'relative',top:'-30px',color:'white'}}><b>otavioalves.com</b></p>
        </Slide>
        {/* <Slide color='#ffd'>
            <h2>Summary</h2>
            <ul style={{display:'block', maxWidth: 650}}>
                <li>The Universe is expanding under the influence of Dark Energy</li>
                <li>By building a 3D galaxy map, we can characterize that expansion</li>
                <li>DESI is measuring spectra of 50M astronomical objects</li>
                <li>First 3 years of data show strong hints that Dark Energy dynamical</li>
            </ul>
        <div style={{position:'absolute',top:'200px',left:'700px'}}>
            <img src="image/qr.svg" height={400} alt=""/>
            <p style={{position:'relative',top:'-100px'}}><b>otavioalves.com</b></p>
        </div>
        </Slide> */}
    </Deck>
)
