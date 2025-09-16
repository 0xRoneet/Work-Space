export default function FormikDemo() {
    return (
        <>
            <form>
                <div className="flex flex-col gap-1">
                    <label>Select Role:</label>
                    <select className="p-2 rounded border" name="role" id="role">
                        <option value="admin">Admin</option>
                        <option value="customer">Customer</option>
                        <option value="owner">Owner</option>
                        <option value="agent">Agent</option>
                    </select>
                </div>

                <div>

                </div>
            </form>
        </>

    );
}