import VideoCard from "../Video";

export default function Final(){

    let arr = [] 
    let c1 = {
        title: "Python",
        subTitle: "Sem 1",
        duration: "25 min"
    }
    let c2 ={
        title: "java",
        subTitle: "Sem 1",
        duration: "25 min"
    }
    let c3= {
        title: "qwerty",
        subTitle: "Sem 1",
        duration: "25 min"
    }
    let c4 ={
        title: "node js",
        subTitle: "Sem 1",
        duration: "25 min"
    }
    let c5 ={
        title: "react js",
        subTitle: "Sem 1",
        duration: "25 min"
    }
    for(let i=0; i< 2; i++){
        arr.push(c1)
        arr.push(c2)
        arr.push(c3)
        arr.push(c4)
        arr.push(c5)
        
    }

    return(
        <div className="VideoCard">
        {arr.map((val , index)=>{
            return(
                <>
                <VideoCard key={index} title={val.title}  subTitle={val.subTitle}  duration={val.duration}/>
                </>
                )
            }
            )
        }
        </div>

    );
}

