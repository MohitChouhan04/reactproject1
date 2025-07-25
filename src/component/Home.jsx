import React from 'react'
import vg from '../assets/images.jpeg';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai' 
const Home = () => {
  return (
    <>
        <div className='home' id='home'>
        <main>
            <h1>Techstar</h1>
            <p>solution to all your problems</p>

        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
            <p>We are your one and only solution to the tech problem you face every day. we are leading tech company whose aim to increase the problem solving ability in children
            </p>
        </div>
    </div>
    <div className="home3" id='about'>
        <div>who we are?
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa voluptatibus nobis id laborum sint modi debitis blanditiis voluptates asperiores iure quas, laudantium tempora ipsum. Ipsa dicta veniam sapiente. Fuga et explicabo error, provident deserunt recusandae libero temporibus doloremque, similique alias nobis, natus a sequi pariatur? Reprehenderit quis quo quod tempora.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>

                <div style={{
                    animationDelay:"0.53",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay:"0.5",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amozon</p>
                </div>

                <div style={{
                    animationDelay:"0.7",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>


                <div style={{
                    animationDelay:"1s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>



            </article>
        </div>
    </div>
    </>

  )
}

export default Home