function state(stateName = "undefined") {
    var success = true;
    $("#state_connectstate").addClass("inactive-state");
    $("#state_usernameinput").addClass("inactive-state");
    $("#state_main").addClass("inactive-state");
    $("#state_error").addClass("inactive-state");
    switch (stateName.toLowerCase()) {
        case "connectstate":
            $("#state_connectstate").removeClass("inactive-state");
            break;
        case "usernameinput":
            $("#state_usernameinput").removeClass("inactive-state");
            break;
        case "main":
            $("#state_main").removeClass("inactive-state");
            break;
        case "error":
            $("#state_error").removeClass("inactive-state");
            break;
        default:
            success = false;
            break;
    }
    if (success) {
        console.log("StateChange: Changed state to \"" + stateName + "\".");
    } else {
        console.error("StateChange: Unknown State \"" + stateName + "\"!");
        $("#state_error").removeClass("inactive-state");
    }
    return success;
}