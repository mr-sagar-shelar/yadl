
export type StateRollback = () => void
export namespace StateRollback {
    export function add(r1: StateRollback | undefined, r2: StateRollback): StateRollback {
        if (!r1) return r2
        return () => {
            r2()
            r1()
        }
    }
}
export type RollbackableResult<T> = {
    result: T,
    rollback: StateRollback
}

