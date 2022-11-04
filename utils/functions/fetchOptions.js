import api from "../../api"

/**
 * fetchFields fn
 *
 * @param searchString: Input value.
 * @param urlKey: backend url key.
 */

export const fetchSearchFields = async (
    searchString,
    urlKey
) => {
    try {

        const res = await api.post(`/${urlKey}?search=${searchString}`)

        return res?.data?.city_state?.[0]?.options.map((item) => ({
            value: item?._source?.text,
            label: item?._source?.text
        }))

    } catch (err) {
        throw new Error(err)
    }
}
