
// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}
  
  // Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (specimenNum) => {

    return ({
        specimenNum,
        dna: mockUpStrand(),
        mutate() {

        const randomnum = Math.floor(Math.random()* (this.dna.length-1))
        let dnaBases = ['A', 'T', 'C', 'G']

            switch(this.dna[randomnum]){

                case "A":
                    dnaBases= this.dna.filter(n => {  
                        return n != "A"});
                    this.dna[randomnum]= dnaBases[Math.floor(Math.random()* (array.length-1))]
                    return this.dna
                    

                case "T":
                    dnaBases= this.dna.filter(n => {  
                        return n != "T"});
                    this.dna[randomnum]= dnaBases[Math.floor(Math.random()* (array.length-1))]
                    return this.dna
                   
                
                case "C":
                    dnaBases= this.dna.filter(n => {  
                        return n != "C"});
                    this.dna[randomnum]= dnaBases[Math.floor(Math.random()* (array.length-1))]
                    return this.dna
                    
                case "G":
                    dnaBases= this.dna.filter(n => {  
                        return n != "G"});
                    this.dna[randomnum]= dnaBases[Math.floor(Math.random()* (array.length-1))]
                    return this.dna
                    

            }
        
        },
        compareDNA(otherpAequor) {

            let counter = 0
            
            for(let x=0; x<this.dna.length; x++){          
                if(otherpAequor.dna[x]===this.dna[x]){
                    counter +=1 
                }
                } 
            let percent = Math.round((counter/ this.dna.length)*100)

            return `specimen ${specimenNum} and specimen ${otherpAequor.specimenNum} have ${percent}% DNA in common`

            },
        willLikelySurvive(){

            const organism =this.dna;

            let survival = 0;

            organism.forEach(n=>{
                if(n==="C"||n==="G"){

                survival+=1;

                }
            })

            if(survival/organism.length >= 0.6){

               return true;  
            }else{
                return false;
            }

        }
        
        })
}


const MakeStudyArray = () =>{

let arrayToStudy=[]

let x=1 
while(x<=30){
    let species= pAequorFactory(x)
    if(species.willLikelySurvive()===true){
       arrayToStudy.push(species) 
       x+=1
    }
}

return arrayToStudy

}
  




console.log(MakeStudyArray())

