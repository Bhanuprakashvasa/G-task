const getAllDetails=async()=>{
    let response=await fetch('https://anapioficeandfire.com/api/characters/583')
        
    let output=await response.json();
    console.log(output)
};
getAllDetails();
