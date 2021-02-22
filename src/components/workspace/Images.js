import Image from 'material-ui-image'

export default function Images(props) {

    const iv = props.iv
    const pv = props.pv

    const ivx = Boolean(iv) ? iv : process.env.PUBLIC_URL + '/default_img.png'
    const pvx = Boolean(pv) ? iv : process.env.PUBLIC_URL + '/default_img.png'


    return (


        <div className='row'>
            <div className="col-md-6">
                <Image src={ivx} aspectRatio="(16/9)"/>
            </div>
            <div className="col-md-6">
                <Image src={pvx} aspectRatio="(16/9)"/>
            </div>
        </div>


    )
}
