import React, { Component } from 'react';
import AllHouses from './AllHouses';
import AllEvents from './AllEvents';
import styled from 'styled-components';
import $ from 'jquery'; 

const HomePageStyle = styled.div`
    display: flex;
    flex-wrapper: wrap;
    justify-content: space-around;
`

var carousel = $(".carousel"),
currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
    if(e.data.d=="n"){
    currdeg = currdeg - 45;
}
if(e.data.d=="p"){
    currdeg = currdeg + 45;
}
carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
    });
}


class Home extends Component {

    
    render() {
        return (
            <div>
                
                <HomePageStyle>
                    <div>
                        <AllHouses />
                    </div>
                    <div>
                        <AllEvents />
                    </div>
                </HomePageStyle>
            </div>
        );
    }
}

export default Home;