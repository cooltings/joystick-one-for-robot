radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
        direction = "up"
        mecanumRobotV2.setServo(90)
    } else if (receivedString == "down") {
        direction = "down"
        mecanumRobotV2.setServo(90)
    } else if (receivedString == "right") {
        direction = "right"
        mecanumRobotV2.setServo(0)
    } else if (receivedString == "left") {
        direction = "left"
        mecanumRobotV2.setServo(270)
    } else if (receivedString == "bothstop") {
        mecanumRobotV2.state()
        direction = "nope"
    } else if (receivedString == "left0") {
        wait = "left"
        direction = "wait"
        mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 75)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 75)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 75)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 75)
    } else if (receivedString == "right0") {
        wait = "left"
        direction = "wait"
        mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 75)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 75)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 75)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 75)
    }
})
let wait = ""
let direction = ""
radio.setGroup(1)
basic.forever(function () {
    if (direction == "up") {
        mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 55)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 50)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 50)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 50)
    } else if (direction == "left") {
        mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 80)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 75)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 75)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 75)
    } else if (direction == "down") {
        mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 55)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 50)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 50)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 50)
    } else if (direction == "right") {
        mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 80)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 75)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 75)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 75)
    } else if (direction == "nope") {
        mecanumRobotV2.state()
    } else {
    	
    }
})
