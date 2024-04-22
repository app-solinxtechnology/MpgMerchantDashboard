import { DependencyList, EffectCallback, useEffect } from 'react'

import { useIsFirstRender } from 'usehooks-ts'

export function useSkipFirstRender(effect: EffectCallback, deps?: DependencyList) {
  const isFirst = useIsFirstRender()

  useEffect(() => {
    if (!isFirst) {
      return effect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}