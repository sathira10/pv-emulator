import Image from "next/image"

export default function Images(props) {

    const iv = props.iv
    const pv = props.pv

    const ivx = Boolean(iv) ? iv : '/default_img.png'
    const pvx = Boolean(pv) ? iv : '/default_img.png'


    return (


        <div className='row'>
            <div className="col-md-6">
                <Image
                    src={iv}
                    width={800}
                    height={450}
                    alt="IV curve"
                    layout="responsive"

                    
                />
            </div>
            <div className="col-md-6">
                <Image
                    src={pv}
                    width={800}
                    height={450}
                    alt="PV Curve"
                    layout="responsive"

                />            
            </div>
        </div>


    )
}
