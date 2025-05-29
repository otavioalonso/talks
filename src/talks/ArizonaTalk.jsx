
import Deck from '../components/Deck.jsx';
import { Slide, ColumnSlide } from '../components/Slide.jsx';
import Mermaid from '../components/Mermaid.jsx';

export default () => (
    <Deck>
        <Slide className='center' iFrameSrc={'html/lss.html'}>
            <h2>Two probes of Dark Energy</h2>
            <p><i>DESI & DES</i></p>
            <br/>
            <p>Otávio Alves</p>
        </Slide>
        <Slide videoSrc='video/mayall.mp4' footer='Footage: KPNO/NOIRLab/NSF/AURA/P. Marenfeld' color='white'>
            {/* <h2 style={{
                color: 'white',
                textShadow: '0px 0px 2px black, 0px 0px 4px black',
            }}>Dark Energy Spectroscopic Instrument</h2> */}
        </Slide>
        <Slide className='center'>
            <h2>Dark Energy Task Force (<a href="https://arxiv.org/abs/astro-ph/0609591">2006</a>, <a href="https://science.osti.gov/-/media/hep/hepap/pdf/20120827/Kolb_HEPAP_8_12_revised.pdf">2012</a>)</h2>
            <ul>
                <li>Stages I &amp; II: Discovery phase &amp; 2000s</li>
                <li>Stage III: BOSS/eBOSS, DES, +</li>
                <li><strong>Stage IV: DESI, LSST, +</strong></li>
            </ul>
            <Mermaid chart={`
                gantt
                dateFormat  MM-YYYY
                axisFormat  %Y
                section a
                eBOSS: 07-2014, 6y
                DESI: desi, 03-2021, 5.5y
                +ext: desi-ext, after desi, 3y
                DESI-2: after desi-ext, 6y
                Spec-S5: 2037, 6y
                section b
                DES:  08-2013, 6y
                LSST: 2025, 10y
            `}/>
        </Slide>
        <Slide videoSrc='video/instrument.mp4' footer='Image: LBNL/KPNO/NOIRLab/NSF/AURA' loop={false}/>
        <Slide videoSrc='video/positioners.mp4' footer='Image: Claire Poppett/DESI' className='center'>
            <div className='fragment' style={{backgroundColor: 'white', padding: '50px'}}>
                <img src="image/positioner-scheme.png" alt=""/>
            </div>
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
        <Slide videoSrc='video/build-positioners.mp4' footer={<b>Image: Marilyn Chung/LNBL</b>} className='has-light-background'/>
        <Slide imageSrc='image/galaxies.jpg' className=''/>
        <Slide imageSrc='image/galaxies-positioners.jpg' className=''/>
        <Slide imageSrc='image/galaxies-positioners-targets.jpg' className=''/>
        <Slide className='center has-light-background' color='#fff' footer={'Overview of the Instrumentation for the Dark Energy Spectroscopic Instrument (2022)'}>
            <img src="image/exposures.png" alt=""/>
        </Slide>
        <Slide className='center has-light-background' color='#fff' footer={'Raichoor et al. (2022)'}>
            <img src="image/spectrum.png" alt=""/>
        </Slide>
        <Slide iFrameSrc='html/galaxies.html'/>
        <Slide color='white' className='has-light-background center'>
            <h2>thecov</h2>
            <p>Analytical covariances of galaxy $P_\ell(k)$</p>
            <div className="fragment fade-in-then-out">
                <ul>
                <li>Based on <a href="https://arxiv.org/abs/1910.02914">Wadekar & Scoccimarro 2019</a>.</li>
                <li>Trispectrum at tree-level using <a href="https://arxiv.org/abs/2308.08593">Kobayashi 2023</a>.</li>
                <li>Available at <a href="https://github.com/cosmodesi/thecov.git">github.com/cosmodesi/thecov</a></li>
                <li>Validation paper coming later this summer.</li>
                </ul>
            </div>
            <div className="fragment fade-in">
                <img src="image/correlation.png" alt="" height={500} style={{position: 'relative',top:-250}}/>
            </div>
            
        </Slide>
        <Slide color='white' className='center has-light-background' footer={'OA et al. (in prep)'}>
            <p>Cubic box (LRG1)</p>
            <img src="image/cov-box.png" alt="" height={580} style={{position:'relative',top:-30}}/>
        </Slide>
        <Slide color='white' className='center has-light-background' footer={'OA et al. (in prep)'}>
            <p>Cut sky (LRG1)</p>
            <img src="image/cov-sky-lrg1.svg" alt="" height={600} style={{position:'relative',top:-30}}/>
        </Slide>
        <Slide color='white' className='center has-light-background' footer={'OA et al. (in prep)'}>
            <p>Cut sky (QSO)</p>
            <img src="image/cov-sky-qso.svg" alt="" height={600} style={{position:'relative',top:-30}}/>
        </Slide>
        <Slide className='center' footer={'DESI DR2 Results II: Measurements of Baryon Acoustic Oscillations and Cosmological Constraints (2025)'}>
            <h1>BAO</h1>
            <h2>from Data Release 2</h2>
        </Slide>
        <Slide color='white' className='center'>
            <p>Number of overlapping dark tiles</p>
            <img src="image/dr2-coverage.png" alt="center" height={500}/>
        </Slide>
        <Slide color='white' className='center'>
            <img src="image/dr2-measurements-6.png" alt="center" height={600}/>
        </Slide>
        <Slide color='white' className='center'>
            <img src="image/dr2-measurements-3.png" alt="center" height={300}/>
        </Slide>
        <Slide color='white' className='center'>
            <img src="image/dr2-distances.png" alt="center" height={600}/>
        </Slide>
        <Slide color='white' className='center'>
            <p>Constraints in ΛCDM</p>
            <div className='row'>
                <img src="image/dr2-per-tracer.png" alt="center" width={500}/>
                <img src="image/dr2-cmb.png" alt="center" width={515}/>
            </div>
        </Slide>
        <Slide color='white' className='center'>
            $\qquad\Omega_m = (0.2975 \pm 0.0086)\qquad H_0 = (68.51 \pm 0.58) \text{'{'}km/s/Mpc{'}'}$
            <div className='row'>
                <img src="image/dr2-om.png" alt="center" width={515}/>
                <img src="image/dr2-h0.png" alt="center" width={500}/>
            </div>
        </Slide>
        <Slide color='#F1F4F7' className='center'>
                <img src="image/mnu-cartoon.png" alt="" height={725}/>
        </Slide>
        <Slide color='white' className='center'>
            $\sum m_\nu {'<'} 0.0642\; \text{'{'}eV{'}'} (\Lambda \text{'{'}CDM{'}'})\qquad \sum m_\nu {'<'} 0.163\; \text{'{'}eV{'}'} (w_0w_a)$
            <div className='row'>
                <img src="image/dr2-mnu-om.png" alt="center" width={525}/>
                <img src="image/dr2-mnu.png" alt="center" width={500}/>
            </div>
        </Slide>
        <Slide color='white' className='center'>
            <p>$w_0w_a$</p>
            <img src="image/dr2-de.png" alt="center" width={540}/>
            <img className='fragment' src="image/dr2-des.png" alt="center" width={500}/>
        </Slide>
        <Slide color='black' className='center'>
            <h2>The Dark Energy Survey</h2>
            <img src="image/des-field.png" height={500}/>
        </Slide>
        <Slide videoSrc='video/blanco.mp4' footer='Footage: CTIO/NOIRLab/NSF/AURA/T. Matsopoulos' color='white'>
            {/* <h2 style={{
                color: 'white',
                textShadow: '0px 0px 2px black, 0px 0px 4px black',
            }}>Dark Energy Survey</h2> */}
        </Slide>
        <Slide color='white' className='center'>
            <p>Area: $5000 \deg^2$</p>
            <img src="image/des-footprint.svg" width={1000}/>
        </Slide>
        <Slide color='white' className='center has-light-background' footer='Credit: Jessie Muir'>
            <img src="image/3x2pt.jpg" height={650}/>
        </Slide>
        <Slide color='white' className='has-light-background center' footer='DES Y3 Results: Cosmological Constraints from Galaxy Clustering and Weak Lensing (2021)'>
            <img src="image/desy3-shear.png" width={1000}/>
        </Slide>
        <Slide color='white' className='has-light-background center' footer='DES Y3 Results: Cosmological Constraints from Galaxy Clustering and Weak Lensing (2021)'>
            <img src="image/desy3-ggl.png" width={1000}/>
        </Slide>
        <Slide color='white' className='has-light-background center' footer='DES Y3 Results: Cosmological Constraints from Galaxy Clustering and Weak Lensing (2021)'>
            <p>Galaxy clustering</p>
            <img src="image/desy3-clustering.png" width={1000}/>
        </Slide>
        <Slide color='#F7F6F4'>
            <img src="image/desy6-models.png" alt="" width={1000}/>
        </Slide>
        <Slide color='white' className='center has-light-background' footer={'Credit: DESI (left), Giulia Campailla/Otávio Alves (right)'}>
            <p>$w_0w_a$ in DES Y6</p>
            <img src="image/dr2-des.png" height={400}/>
            <img src="image/desy6-w0wa.png" height={410}/>
        </Slide>
        <Slide color='white' className='center has-light-background' footer={'DES Y3 3 Results: Constraints on extensions to ΛCDM with weak lensing and galaxy clustering (2022)'}>
            <p>Growth of structure in DES Y3</p>
            <img src="image/desy3-s8z.svg" width={1000}/>
        </Slide>
        <Slide color='white' className='center has-light-background' footer={'Credit: Sujeong Lee'}>
            <p>Growth of structure in DES Y6</p>
            <img src="image/desy6-s8z.png" height={500}/>
        </Slide>
        <Slide color='white' className='center has-light-background' footer={'DES Y3 3 Results: Constraints on extensions to ΛCDM with weak lensing and galaxy clustering (2022)'}>
            <p>Modified Gravity in DES Y3</p>
            {/* $$
            k^2 \Phi = - 2\pi G a^2\rho\delta \left[1+\Sigma(a,k)\right] \left[2\rho \delta + 3(\rho + P) \sigma\right]\\\\
            k^2\Psi = -4\pi G a^2 \left[1+\mu(a,k) \right] \left[\rho \delta + 3(\rho + P) \sigma \right] \\\\
            \Sigma(a), \mu(a) = (\Sigma_0, \mu_0) \frac{"{"}\Omega_{"{"}\Lambda{"}"}(a){"}"}{"{"}\Omega_{"{"}\Lambda,0{"}"}{"}"}
            $$ */}
            <img src="image/desy3-sigmu.svg" width={1000} />
        </Slide>
        <Slide color='white' className='center has-light-background' footer={'Credit: Sujeong Lee'}>
            <p>Modified Gravity in DES Y6</p>
            <img src="image/desy6-sigmu.png" height={500}/>
        </Slide>

        {/* <Slide color='#fff'>
            <h2>Summary</h2>
            <ul style={{display:'block', maxWidth: 650}}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        <div style={{position:'absolute',top:'200px',left:'700px'}}>
            <img src="image/qr.svg" height={400} alt=""/>
            <p style={{position:'relative',top:'-100px'}}><b>otavioalves.com</b></p>
        </div>
        </Slide> */}

        <Slide iFrameSrc='html/galaxies.html' className='center'>
            <h2>Thanks!</h2>
            
        <div>
            <img src="image/qr.svg" height={400} alt=""/>
            <p style={{position:'relative',top:'-100px'}}><b>otavioalves.com</b></p>
        </div>
        </Slide>
    </Deck>
)
