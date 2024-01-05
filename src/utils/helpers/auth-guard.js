import { redirect } from "react-router-dom";

function AuthGuard(enabled = true) {
    const access = localStorage.getItem("access");
    return enabled ? (!access ? redirect("/#un-authorised") : "") : ""
}

export default AuthGuard;