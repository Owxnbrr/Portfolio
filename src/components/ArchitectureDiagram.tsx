'use client'

import type { ArchitectureDiagram as DiagramType, ArchitectureNode } from '@/data/portfolio'

interface Props {
  diagram: DiagramType
}

const NODE_STYLES: Record<ArchitectureNode['type'], {
  bg: string; border: string; text: string; badge: string
}> = {
  client:  { bg: '#0EA5E9',  border: '#0EA5E9', text: '#0EA5E9',  badge: 'CLIENT'  },
  server:  { bg: '#10B981',  border: '#10B981', text: '#10B981',  badge: 'SERVER'  },
  db:      { bg: '#8B5CF6',  border: '#8B5CF6', text: '#8B5CF6',  badge: 'DB'      },
  service: { bg: '#F59E0B',  border: '#F59E0B', text: '#F59E0B',  badge: 'SERVICE' },
  infra:   { bg: '#64748B',  border: '#64748B', text: '#64748B',  badge: 'INFRA'   },
}

function computeLayout(nodes: ArchitectureNode[]) {
  const cols = Math.min(nodes.length, 3)
  const rows = Math.ceil(nodes.length / cols)
  const W = 140  
  const H = 72   
  const GAP_X = 80
  const GAP_Y = 80
  const CANVAS_W = cols * W + (cols - 1) * GAP_X + 40
  const CANVAS_H = rows * H + (rows - 1) * GAP_Y + 40

  const positions: Record<string, { x: number; y: number }> = {}
  nodes.forEach((node, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const rowCount = i < cols * (rows - 1) ? cols : nodes.length - cols * (rows - 1)
    const rowOffset = (cols - rowCount) * (W + GAP_X) / 2
    positions[node.id] = {
      x: 20 + col * (W + GAP_X) + rowOffset,
      y: 20 + row * (H + GAP_Y),
    }
  })

  return { positions, CANVAS_W, CANVAS_H, W, H }
}

export function ArchitectureDiagram({ diagram }: Props) {
  const { nodes, edges } = diagram
  const { positions, CANVAS_W, CANVAS_H, W, H } = computeLayout(nodes)

  return (
    <div
      className="rounded-md overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]"
      role="img"
      aria-label="Diagramme d'architecture du projet"
    >
      <div className="px-5 py-3 border-b border-[var(--color-border)] flex items-center gap-3">
        <span className="label-mono">// architecture_diagram</span>
        <div className="ml-auto flex items-center gap-4">
          {(Object.keys(NODE_STYLES) as ArchitectureNode['type'][])
            .filter(type => nodes.some(n => n.type === type))
            .map(type => (
              <div key={type} className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-sm"
                  style={{ background: NODE_STYLES[type].bg + '33', border: `1px solid ${NODE_STYLES[type].border}66` }}
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] text-[var(--color-muted)] uppercase tracking-wider">
                  {NODE_STYLES[type].badge}
                </span>
              </div>
            ))
          }
        </div>
      </div>

      <div className="p-4 overflow-x-auto">
        <svg
          viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
          width={CANVAS_W}
          height={CANVAS_H}
          style={{ minWidth: '100%', display: 'block' }}
          aria-hidden="true"
        >
          <defs>
            {(Object.keys(NODE_STYLES) as ArchitectureNode['type'][]).map(type => (
              <marker
                key={type}
                id={`arrow-${type}`}
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path
                  d="M0,0 L0,6 L8,3 z"
                  fill={NODE_STYLES[type].border + '80'}
                />
              </marker>
            ))}
            <marker id="arrow-default" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#1E293B" />
            </marker>
          </defs>

          {edges.map((edge, i) => {
            const from = positions[edge.from]
            const to = positions[edge.to]
            if (!from || !to) return null

            const fromNode = nodes.find(n => n.id === edge.from)
            const style = fromNode ? NODE_STYLES[fromNode.type] : null
            const markerColor = fromNode?.type ?? 'default'

            const fx = from.x + W / 2
            const fy = from.y + H / 2
            const tx = to.x + W / 2
            const ty = to.y + H / 2

            const dx = tx - fx
            const dy = ty - fy
            const angle = Math.atan2(dy, dx)

            const halfW = W / 2
            const halfH = H / 2
            const ex = fx + Math.cos(angle) * halfW
            const ey = fy + Math.sin(angle) * halfH
            const ex2 = tx - Math.cos(angle) * halfW
            const ey2 = ty - Math.sin(angle) * halfH

            const midX = (ex + ex2) / 2
            const midY = (ey + ey2) / 2
            const cpX = midX
            const cpY = midY - 20

            const pathD = `M ${ex} ${ey} Q ${cpX} ${cpY} ${ex2} ${ey2}`

            const dir = i % 2 === 0 ? 1 : -1
            const labelX = midX + dir * 18
            const labelY = (cpY - 8) + dir * 10

            return (
              <g key={i}>
                <path
                  d={pathD}
                  fill="none"
                  stroke={style ? style.border + '60' : '#1E293B'}
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  markerEnd={`url(#arrow-${markerColor})`}
                />
                {edge.label && (
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    className="font-mono"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px',
                      fill: 'var(--color-muted)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            )
          })}

          {nodes.map(node => {
            const pos = positions[node.id]
            const style = NODE_STYLES[node.type]

            return (
              <g key={node.id} transform={`translate(${pos.x}, ${pos.y})`}>
                <rect
                  x={0} y={0}
                  width={W} height={H}
                  rx={6} ry={6}
                  fill={style.bg + '18'}
                  stroke={style.border + '50'}
                  strokeWidth={1}
                />
                <rect
                  x={0} y={0}
                  width={W} height={2}
                  rx={2}
                  fill={style.bg + '90'}
                />
                <text
                  x={8} y={18}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '8px',
                    fill: style.text,
                    letterSpacing: '0.08em',
                    opacity: 0.7,
                  }}
                >
                  {style.badge}
                </text>
                <text
                  x={W / 2} y={H / 2 + 5}
                  textAnchor="middle"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '13px',
                    fontWeight: '600',
                    fill: 'var(--color-text)',
                  }}
                >
                  {node.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
