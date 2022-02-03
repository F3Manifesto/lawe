import React, { useEffect } from 'react'
import styles from './styles.module.scss'

const Interference = () => {

  useEffect(() => {
    const canvasContext = animCanvas.getContext("2d",{ alpha: false })
    const ff=255
    const mb=Math.max(innerWidth,innerHeight)<800
    let W=animCanvas.width=(animBack.clientWidth/(mb?2:3))|0
    let H=animCanvas.height=(animBack.clientHeight/(mb?2:3))|0
    //I=new ImageData(W,H)
    let I=canvasContext.createImageData(W,H)
    onresize=function(){
      if(mb&&W==animBack.clientWidth)return
      W=animCanvas.width=(animBack.clientWidth/(mb?2:3))|0
      H=animCanvas.height=(animBack.clientHeight/(mb?2:3))|0
      //I=new ImageData(W,H)
      I=canvasContext.createImageData(W,H)
    }
    // Generate textures
    const i1=canvasContext.createImageData(256,256)
    const i2=canvasContext.createImageData(256,256)
    //i1=new ImageData(256,256)
    //i2=new ImageData(256,256)
    for(let Y=256;Y--;)
      for(let X=256;X--;){
        let x=X-128
        let y=Y-128
        let offs=(Y<<10)+(X<<2)
        let v1=(Math.sqrt(x*x+y*y)|0)
        let v2=(127+(Math.sin(.03*(Math.abs(x)+Math.abs(y)))+Math.sin(.03*(x*x+y*y))+Math.sin(.003*(Math.pow(Math.abs(x),1.5)+Math.pow(Math.abs(y),1.5)))*ff/3))|0
        i1.data[offs  ]=(v1&31)*8
        i1.data[offs+1]=(v1&31)
        i1.data[offs+2]=(v1&15)*16
        i1.data[offs+3]=ff
        i2.data[offs  ]=v2
        i2.data[offs+1]=0
        i2.data[offs+2]=v2
        i2.data[offs+3]=ff
      }
    // uncomment to see the textures :)
    // canvasContext.putImageData(i1,0,0)
    // throw Error("Stop! I'd like to see texture 1 :)")
    // canvasContext.putImageData(i2,0,0)
    // throw Error("Stop! I'd like to see texture 2 :)")

    let xx=[0,0,0,0]
    let yy=[0,0,0,0]
    let xφ=[0,0,0,0]
    let yφ=[0,0,0,0]
    let xω=[.0291,.0115,.0464,.0337]
    let yω=[.0064,.0045,.0403,.0422]




    function loc(x,y) {return (y*256+x)*4}
    ~function L(t){
      t/=10
      for(let i=4;i--;)
        xx[i]=(Math.cos(xφ[i])+1)*128,
        yy[i]=(Math.cos(xφ[i])+1)*128,
        xφ[i]+=xω[i],yφ[i]+=yω[i]
      for(let y=H;y--;)
        for(let x=W;x--;) {
          const dest=(y*W+x)*4
          const o=[]
          for(let i=4;i--;)o[i]=loc(((xx[i]|0)+x)&ff,((yy[i]|0)+y)&ff)
          I.data[dest  ]=(i1.data[o[0]  ]+i1.data[o[1]  ]+i2.data[o[2]  ]+i2.data[o[3]  ]+t)&ff
          I.data[dest+1]=(i1.data[o[0]+1]+i1.data[o[1]+1]+i2.data[o[2]+1]+i2.data[o[3]+1])&ff
          I.data[dest+2]=(i1.data[o[0]+2]+i1.data[o[1]+2]+i2.data[o[2]+2]+i2.data[o[3]+2]+t)&ff
          I.data[dest+3]=ff
        }
      canvasContext.putImageData(I,0,0)
      requestAnimationFrame(L)
    }(0)
  }, [])
  return (
    <div
      id='animBack'
      className={styles.animBack}
    >
      <canvas
        id='animCanvas'
        className={styles.animCanvas}
      ></canvas>
      <div className={styles.overlay}></div>
    </div>
  )
}

export default Interference