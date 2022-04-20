import * as BenchAPIUtil from "../util/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
}

export const fetchBenches = () => dispatch => 
    BenchAPIUtil.fetchBenches().then(benches => dispatch(receiveBenches(benches)))