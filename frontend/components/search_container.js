import { connect } from "react-redux";
import Search from "./search"
import { fetchBenches } from "../actions/bench_actions";
import { updateBounds } from "../actions/filter_actions";

const mapStateToProps = (state) => {
    return {
        benches: Object.values(state.entities.benches)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBenches: () => dispatch(fetchBenches()),
        updateBounds: (bounds) => dispatch(updateBounds(bounds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);