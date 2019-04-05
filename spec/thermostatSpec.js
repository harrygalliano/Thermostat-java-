describe ('thermostat', function() {
    var thermostat;

    beforeEach(function(){
        thermostat = new Thermostat();
    });
    describe ('Has a start value', function(){
        it('has a temperature of 20', function(){
        expect(thermostat.temperature).toBe(20)
        });

    });

    describe ('Increase function', function(){
        it('can have the temperature increased in increments of 1', function(){
        thermostat.up();
        expect(thermostat.temperature).toBe(21)
        });
    });

    describe ('Decrease function', function(){
        it('can have the temperature decreased in increments of 1', function(){
            thermostat.down();
            expect(thermostat.temperature).toBe(19)
        });
    });

    describe ('Min', function(){
        it('has a minimum temperature value of 10', function(){
            for (down = 0; down < 11; down++) {
                thermostat.down();
            };
            expect(thermostat.temperature).toBe(10)
        });
    });

    describe ('Max', function(){
        it('has a maximum temperature value of 25', function(){
            for (up = 0; up < 11; up++) {
                thermostat.up();
            };
            expect(thermostat.temperature).toBe(25)
        });
    });

    describe ('powerSaver', function(){
        it('has a power saving mode that is automatically on', function(){
            expect(thermostat.powerSaver).toBe("on");
        });
    });

    describe('powerSaver', function(){
        it('has the ability to turn powerSaver off', function(){
            thermostat.powerSaverOff();
            expect(thermostat.powerSaver).toBe("off");
        });
    });

    describe('powerSaver', function(){
        it('increases the maximum temperature value', function(){
            thermostat.powerSaverOff();
            for (up = 0; up < 14; up++){
            thermostat.up();
            };
            expect(thermostat.temperature).toBe(32)
        });
    });

    describe('powerSaver', function(){
        it('has a function to turn the power saver on', function(){
            thermostat.powerSaverOff();
            expect(thermostat.powerSaver).toBe("off");
            thermostat.powerSaverOn();
            expect(thermostat.powerSaver).toBe("on");
        });
    });

    describe('reset', function(){
        it('allows the reset of the temperature', function(){
            thermostat.reset();
            expect(thermostat.temperature).toBe(20);
        });
    });

    describe('energySaver', function(){
        it('allows the user to check the energy usage', function(){
            for (down = 0; down < 3; down++) {
                thermostat.down();
            };
            expect(thermostat.temperature).toBe(17);
            expect(thermostat.energySaver()).toBe("low usage");
            expect(thermostat.colour).toBe("green");
        });
    });

    describe('energySaver', function(){
        it('allows the user to check the energy usage', function(){
            for (up = 0; up < 4; up++) {
                thermostat.up();
            };
            expect(thermostat.temperature).toBe(24);
            expect(thermostat.energySaver()).toBe("medium usage");
            expect(thermostat.colour).toBe("black");
        });
    });

    describe('energySaver', function(){
        it('allows the user to check the energy usage', function(){
            thermostat.powerSaverOff();
            for (up = 0; up < 6; up++) {
                thermostat.up();
            };
            expect(thermostat.temperature).toBe(26);
            expect(thermostat.energySaver()).toBe("high usage");
            expect(thermostat.colour).toBe("red");
        });
    });
});