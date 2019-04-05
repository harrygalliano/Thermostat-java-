function Thermostat(){
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE = 32;
    this.POWER_SAVER_MAX = 25;
    this.powerSaver = "on";
    this.energyUsage = "";
}

Thermostat.prototype.up = function(){
    if (this.powerSaver === "off"){
        if(this.temperature < this.MAXIMUM_TEMPERATURE){
        this.temperature++;
        }
    }
    else {
       if(this.temperature < this.POWER_SAVER_MAX){
           this.temperature++;
       } 
    }
}

Thermostat.prototype.down = function(){
    if (this.temperature > this.MINIMUM_TEMPERATURE){
        this.temperature--;
    }
}

Thermostat.prototype.powerSaverOff = function(){
    this.powerSaver = "off";
}

Thermostat.prototype.powerSaverOn = function(){
    this.powerSaver = "on";
}

Thermostat.prototype.reset = function(){
    this.temperature = 20;
}

Thermostat.prototype.energySaver = function(){
    if(this.temperature < 18){
        energyUsage = "low usage";
        this.colour = "green"
    }
    else if(this.temperature < 25){
        energyUsage = "medium usage";
        this.colour = "black"
    }
    else {
        energyUsage = "high usage";
        this.colour = "red"
    }
    return energyUsage;
}
