const topics = ['HTML', 'CSS', 'Git', 'Javascript'];

function listTopics () {
    for (let i = 0; i < topics.length; i++) {
        console.log(topics[i])
    };
    
}


function selectTopic () {
    const topics = ['HTML', "CSS", "Git", "Javascript"];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    if (randomTopic === 'HTML') {
        console.log("Let's Study HTML!");
    }
    else if (randomTopic === 'CSS') {
        console.log("Let's Study CSS!");
    }
    else if (randomTopic === 'Git') {
        console.log("Let's Study Git!");
    }
    else if (randomTopic === 'Javascript') {
        console.log("Let's Study Javascipt!");
    }
    else {
        console.log('Please try again');
    }
}
  /*  const shapes = ["triangle", "square", "pentagon", "circle"];
    //console.log (shapes[0]);
    
    for(let i = 0; i < shapes.length; i++) {
        console.log (shapes[i])
    }
*/ 


console.log ("Here are the topics we learned through Pre-work:")
listTopics();
console.log ("Which topic should we study first?")
selectTopic();