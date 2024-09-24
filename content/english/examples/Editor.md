---
title: "Editor"
meta_title: ""
description: ""
date: 2022-04-04T05:00:00Z
image: "/images/image-placeholder.png"
categories: ["Application", "Data"]
author: "Sagar Shelar"
tags: ["nextjs", "tailwind"]
draft: false
---

{{< yadlEditor code=
`icon alexa-for-business { position { x: 0 y: 20 } }
icon chatbot { position { x: 130 y: 20 } }
icon mongo-db { position { x: 260 y: 20 } }
icon ableton-dark { position { x: 390 y: 20 } }
icon vue-js-dark { position { x: 0 y: 150 } }
icon x-ray { position { x: 130 y: 150 } }
icon docker { position { x: 260 y: 150 } }
icon kubernetes { position { x: 390 y: 150 } }
icon terraform-dark { position { x: 510 y: 150 } }
box "YADL" [icon: angular-dark] {
    position {
        x: 700 y: 150
    }
}
annotation "Built-in node and edge types. Draggable, deletable and connectable!" {
    position {
        x: 200 y: 300
    }
    arrowStyle {
        right: 0
        bottom: 0
        transform: "translate(-30px,10px) rotate(-80deg)"
    }
}
annotation "Sub flows, toolbars and resizable nodes!" {
    position {
        x: 500 y: 300
    }
    arrowStyle {
        left: 0
        bottom: 0
        transform: "translate(5px, 25px) scale(1, -1) rotate(100deg)"
    }
}
box "Parent" [icon: mongo-db] {
    position {
        x: 700 y: 20
    }
    box "CHILD1" [icon: ableton-dark] {
        position {
            x: 200 y: 20
        }
    }
    box "CHILD2" [icon: work-mail] {
        position {
            x: 200 y: 20
        }
    }
    box "CHILD3" [icon: work-mail] {
        position {
            x: 200 y: 20
        }
    }
}
` >}}
