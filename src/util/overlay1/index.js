import { overlay1store } from "@/stores/overlay1";

const store = overlay1store();

export function tester(json) {
    let t_score = json["map"]["team_t"]["score"];
    store.setTest(t_score)
}