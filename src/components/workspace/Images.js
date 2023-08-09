import Image from "next/image"

export default function Images(props) {

    // const iv = props.iv
    // const pv = props.pv

    // const ivx = Boolean(iv) ? iv : process.env.PUBLIC_URL + '/default_img.png'
    // const pvx = Boolean(pv) ? iv : process.env.PUBLIC_URL + '/default_img.png'


    return (


        <div className='row'>
            <div className="col-md-6">
                <Image
                    src="/default_img.png"
                    width={800}
                    height={450}
                    alt="Picture of the author"
                    layout="responsive"

                    
                />
            </div>
            <div className="col-md-6">
                <Image
                    src="/default_img.png"
                    width={800}
                    height={450}
                    alt="Picture of the author"
                    layout="responsive"

                />            
            </div>
        </div>


    )
}
