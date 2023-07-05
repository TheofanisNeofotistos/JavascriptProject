const deck = [
    {id: 2, title: "lockUp" , attribute: "grapple" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/02-LockUp-1.png"},
    {id: 3, title: "headlock" , attribute: "submission" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/03-Headlock-1.png"},
    {id: 4, title: "kick" , attribute: "strike" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/04-Kick-1.png"},
    {id: 5, title: "hiptoss" , attribute: "grapple" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/05-HipToss-1.png"},
    {id: 6, title: "armbar" , attribute: "submission" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/06-Armbar-1.png"},
    {id: 7, title: "forearmShot" , attribute: "strike" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/07-ForearmShot-1.png"},
    {id: 9, title: "faceStretch" , attribute: "submission" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/09-FaceStretch-1.png"},
    {id: 10, title: "headbutt" , attribute: "strike" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/10-Headbutt-1.png"},
    {id: 11, title: "ArmDrag" , attribute: "grapple" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/11-ArmDrag-1.png"},
    {id: 12, title: "rearChinLock" , attribute: "submission" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/12-RearChinLock-1.png"},
    {id: 13, title: "runningLariat" , attribute: "strike" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/13-RunningLariat-1.png"},
    {id: 14, title: "ddt" , attribute: "grapple" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/14-Ddt-1.png"},
    {id: 15, title: "bowAndArrow" , attribute: "submission" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/15-BowAndArrow-1.png"},
    {id: 16, title: "shoulderBlock" , attribute: "strike" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/16-ShoulderBlock-1.png"},
    {id: 19, title: "elbowStrikes" , attribute: "strike" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/19-ElbowStrikes-1.png"},
    {id: 20, title: "neckbreaker" , attribute: "grapple" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/20-Neckbreaker-1.png"},
    {id: 21, title: "legLock" , attribute: "submission" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/21-LegLock-1.png"},
    {id: 22, title: "clothesline" , attribute: "strike" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/22-Clothesline-1.png"},
    {id: 23, title: "backbreaker" , attribute: "grapple" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/23-BackBreaker-1.png"},
    {id: 28, title: "elSuperSmash" , attribute: "strike" , type: "finish", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/28-ElSuperSmash-1.png"},
    {id: 24, title: "strangleHold" , attribute: "submission" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/24-StrangleHold-1.png"},
    {id: 25, title: "dropkick" , attribute: "strike" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/25-Dropkick-1.png"},
    {id: 26, title: "fallawaySlam" , attribute: "grapple" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/26-FallawaySlam-1.png"},
    {id: 27, title: "doubleArmbar" , attribute: "submission" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/27-DoubleArmbar-1.png"},
    {id: 29, title: "superSlam" , attribute: "grapple" , type: "finish", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/29-SuperSlamALT-1.png"},
    {id: 30, title: "elSuperHold" , attribute: "submission" , type: "finish", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/30-ElSuperHold-1.png"},
    {id: 18, title: "sleeperHold" , attribute: "submission" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/18-SleeperHold-1.png"},
    {id: 17, title: "suplex" , attribute: "grapple" , type: "followUp", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/17-Suplex-1.png"},
    {id: 1, title: "punch" , attribute: "strike" , type: "lead", effect: undefined, img: "/WrestlingCardGame/images/deckOneArt/01-Punch-1.png"},
    {id: 8, title: "scoopSlam" , attribute: "grapple" , type: "lead", effect: undefined,img: "/WrestlingCardGame/images/deckOneArt/08-ScoopSlam-1.png"},
    

]

// function shuffle(deck) {
//     let currentIndex = deck.length,  randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {
  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [deck[currentIndex], deck[randomIndex]] = [
//         deck[randomIndex], deck[currentIndex]];
//     }
  
//     return deck;
//   }



export default deck