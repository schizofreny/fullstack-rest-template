import { FastifyPluginAsync } from "fastify"
import { Server } from "http"

export type PluginRegisterFn = FastifyPluginAsync<Record<string, any>, Server>
