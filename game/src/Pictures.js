import React, {useEffect, useState} from "react";
import "./styles.css"
import Scores from "./Scores";

function Pictures() {


    function fuck(idx) { 
        
        selectPick(idx)
    }

    const [arr, setArr] = useState([
        "https://wwd.com/wp-content/uploads/2018/11/pharrell-through-the-years01.jpg",
        "https://www.looktothestars.org/photo/1753-pharrell-williams/story_half_width.jpg",
        "https://cdn.justjared.com/wp-content/uploads/2014/01/pharrell-grammys/pharrell-williams-wins-producer-of-the-year-grammys-2014-02.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tcx060121coverpharrell-003-1621610753.jpg",
        "https://i.pinimg.com/originals/20/25/0e/20250eb8991e4bccb5be8eadcd76f8ce.jpg",
        "https://www3.pictures.gi.zimbio.com/2006+MTV+Video+Music+Awards+Arrivals+HCFBCl2PeRfx.jpg",
        "https://i.pinimg.com/originals/ea/13/6e/ea136ec655f2efb305f58618fe51f822.jpg",
        "https://www.billboard.com/wp-content/uploads/media/pharrell-williams-grammys-red-carpet-2016-billboard-1548.jpg"
    ])
    const [selected, setSelected] = useState([])
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [scoreHistory, setScoreHistory] = useState([])

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        
        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = 
            [array[randomIndex], array[currentIndex]];

        }
        setArr(array)
        return array;
    }

    

    function selectPick(idx) {
        
        let el = idx.target.id

        if (selected.some(x => x === el)) {

            setScoreHistory([...scoreHistory, score])
            
            if (scoreHistory.every(num => num < score)) {
                setBestScore(score)
            }
            
            
            setScore(0)
            setSelected([])
            return console.log("lose")
        } 
        setScore(score + 1)

        setSelected([...selected, el])
    }

    useEffect(() => {
        shuffle(arr)

        console.log(score)
        
    })

    return(
        <div>
            <div className="container">
                <div className="pics">
                    
                    {arr.map((item, index) => {
                        return(
                            <div>
                                 <img src={item} key={index} id={item} onClick={(e) => fuck(e)}>
                            
                            </img>
                            
                            </div>
                        
                        
                        )
                    })}
                </div>
                <div>
                    <Scores
                    score={score}
                    bestScore={bestScore}
                    />
                </div>
    
            </div>
        </div>
    )
}


export default Pictures;

