function solve(name, population, treasury) {
    const city = {}
    city.name = name;
    city.population = population;
    city.treasury = treasury;
    return {
        name,population,treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury += this.population * this.taxRate
        },
        applyGrowth(percent){
            this.population += Math.floor(this.population * percent / 100)
        },
        applyRecession(percet){
           this.treasury += Math.floor(treasury * percet / 100)
        }
    };

}
const city =

solve('Tortuga',

7000,

15000);

console.log(city)
