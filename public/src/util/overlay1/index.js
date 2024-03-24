import { overlay1store } from "public/src/stores/overlay1";

const store = overlay1store();

export function tester(json) {
    let t_score = json["map"]["team_t"]["score"];
    store.setTest(t_score)
}