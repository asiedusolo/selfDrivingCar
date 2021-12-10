import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
    isRunning?: boolean;
    respond: (events: Events) => void;
  }
  
  interface AutonomousCarProps {
    isRunning?: boolean;
  }
  
  interface Events {
    [obstacleDirection: string]: boolean;
  }
  
  interface Control {
    execute: (command: string) => void;
  }
  
  interface Steering extends Control{
    turn: (direction: string) => void;
  }
  
  
  class Car implements AutonomousCar{
    isRunning;
  
    constructor(props: AutonomousCarProps){
      this.isRunning = props.isRunning;
    }
  
    respond(events: Events){
      if(!this.isRunning){
        return
      }
    }
  }
  
  class SteeringControl implements Steering {
    execute(command: string){
      console.log(`Executing: ${command}`)
    }
    turn(direction: string){
      this.execute(`turn ${direction}`)
    }
  }
  
  const steering = new SteeringControl();
  steering.turn("left")
  const autonomousCar = new Car({isRunning: true});
  console.log(autonomousCar.respond(getObstacleEvents()))