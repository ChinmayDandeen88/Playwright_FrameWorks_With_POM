/* used for creating randowmemail,randowm number, read_CSV,read_Excel,read_JSON */

export function randomEmail(prefix="test_user") {

    const email = `${prefix}_${Date.now()}@email.com`;
    return email;
}